/* eslint-disable no-restricted-syntax */

const createAsyncScheduler = () => (fn) => setTimeout(fn, 0);

class Scheduler {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.queue = [];
        this.async = createAsyncScheduler();
        this.tid = 0;
    }

    onSuccess = (data) => {
        this.async(() => this.dispatch(data));
    }

    onError = (error) => {
        this.async(() => this.dispatch(error));
    }

    add(task) {
        const id = this.incrementId();
        this.queue.push({
            id,
            run: () => task.then(this.onSuccess).catch(this.onError)
        });
        this.run();
        return task;
    }

    incrementId() {
        this.tid = this.tid + 1;
        return this.tid;
    }

    run() {
        const { queue, async } = this;
        function nextTask() {
            async(() => {
                const task = queue.shift();
                task.run();
                if (queue.length) {
                    nextTask();
                }
            });
        }
        nextTask();
    }
}

const isPromise = (x) => x instanceof Promise;

const unwrapPromise = (result, prevState, enqueue) => {
    if (isPromise(result)) {
        enqueue(result);
        return Object.assign({}, prevState, { loading: true });
    }
    return result;
};

export default function createTaskMiddleware() {
    let scheduler;
    const enqueue = (t) => scheduler.add(t);

    // this will ensure you can return promise from a reducer.
    // unwrapPromise enqueue those promises and coninue the flow after the promise
    // gets resolved or rejected
    function combineReducers(reducers) {
        return (st = {}, action) => {
            const state = Object.assign({}, st);
            for (const [key, reducer] of Object.entries(reducers)) {
                const substate = st[key];
                state[key] = unwrapPromise(reducer(substate, action), substate, enqueue);
            }
            return state;
        };
    }

    const middleware = ({ dispatch, getState }) => {
        scheduler = new Scheduler(dispatch);
        return (next) => (action) => {
            if (isPromise(action)) {
                enqueue(action);
                return getState();
            }
            return next(action);
        };
    };
    middleware.combineReducers = combineReducers;
    return middleware;
}
