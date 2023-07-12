import { all } from 'redux-saga/effects';
import {apodSaga} from '../feature/apod/apod.saga.ts';

export default function* rootSaga() {
  yield all([
    apodSaga(),
  ])
};
