import { createStore, compose, combineReducers } from 'redux';
import * as Builder from '../builder/Resume';
import * as Resume from '../builder/Builder';

export default function create() {
    const initialState = {
        builder: Builder.init(),
        resume: Resume.init()
    };
    const rootReducer = combineReducers({
        builder: Builder.update,
        resume: Resume.update
    });

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;

    const store = createStore(rootReducer, initialState, composeEnhancers);
    return store;
}
