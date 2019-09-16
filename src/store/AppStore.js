import { createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import * as Builder from '../builder/Builder';
import { history } from '../route/AppRoutes';
import createTaskMiddleware from './Task';

export default function create() {
    const sagaMiddleware = createSagaMiddleware();
    const taskMiddleware = createTaskMiddleware();
    const rootReducer = taskMiddleware.combineReducers({
        router: connectRouter(history),
        builder: Builder.update
    });

    const composeEnhancers = compose;

    const initialState = {
        builder: Builder.init()
    };
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware, taskMiddleware, routerMiddleware(history)))
    );
    sagaMiddleware.run(function* rootSaga() {
        yield all[
            Builder.effects()
        ];
    });
    return store;
}
