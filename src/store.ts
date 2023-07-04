
import {createStore, applyMiddleware} from 'redux';

import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer.ts';
//import {rootSaga} from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer , applyMiddleware(sagaMiddleware));

export default store;
