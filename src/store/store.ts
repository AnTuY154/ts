// import usersReducer from '../features/counter/dataSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

