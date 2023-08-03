import { all } from 'redux-saga/effects';
import {apodSaga} from '../feature/apod/apod.saga.ts';
import {asteroidSaga} from '../feature/asteroid/asteroid.saga.ts';
import {donkiSaga} from '../feature/donki/donki.saga.ts';


export default function* rootSaga() {
  yield all([
    apodSaga(),
    asteroidSaga(),
    donkiSaga(),
  ])
};
