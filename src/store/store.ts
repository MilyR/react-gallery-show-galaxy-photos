
import {createStore, applyMiddleware} from 'redux';

import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root.reducer.ts';
import rootSaga from './root.saga.ts';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer , applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const action = type => store.dispatch({type})

export default store;
