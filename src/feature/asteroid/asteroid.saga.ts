import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  GET_ASTEROID_START,
} from './asteroid.constants.ts';
import AsteroidService from './asteroid.api.ts';
import {
  getAsteroidSuccess,
  getAsteroidError,
} from './asteroid.action.ts';

function* fetchAsteroid() {
  try {
    const service = new AsteroidService()
    const asteroid = yield call(service.getAsteroids);
    console.log({asteroid})
    yield put(getAsteroidSuccess(asteroid.data));
  } catch (e) {
    yield put(getAsteroidError());
  }
}


export function* asteroidSaga() {
  yield takeLatest(GET_ASTEROID_START, fetchAsteroid);
}