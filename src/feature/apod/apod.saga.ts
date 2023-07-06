import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  GET_APOD_START,
} from './apod.constants.ts';
import ApodService from './apod.api.ts';
import {
  getApodSuccess,
  getApodError,
} from './apod.action.ts';

export function* apodSaga() {
  yield takeEvery(GET_APOD_START, fetchApod);
}

function* fetchApod() {
  try {
    const service = new ApodService()
    const apod = yield call(service.getApod);
    yield put(getApodSuccess(apod));
  } catch (e) {
    yield put(getApodError());
  }
}
