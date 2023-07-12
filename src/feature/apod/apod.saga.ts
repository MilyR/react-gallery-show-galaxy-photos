import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  GET_APOD_START,
} from './apod.constants.ts';
import ApodService from './apod.api.ts';
import {
  getApodSuccess,
  getApodError,
} from './apod.action.ts';

function* fetchApod() {
  try {
    const service = new ApodService()
    const apod = yield call(service.getApod);
    yield put(getApodSuccess(apod.data));
  } catch (e) {
    yield put(getApodError());
  }
}


export function* apodSaga() {
  yield takeLatest(GET_APOD_START, fetchApod);
}