import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  GET_APOD_START,
  GET_APOD_BY_DATE_START,
} from './apod.constants.ts';
import ApodService from './apod.api.ts';
import {
  getApodSuccess,
  getApodError,
  get_apod_by_date_success,
  get_apod_by_date_error,
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

function* fetchApodByDate(action) {
  try {
    const service = new ApodService()
    const apod = yield call(service.getApodByDate, action.payload);
    yield put(getApodByDateSuccess(apod.data));
  } catch (e) {
    yield put(getApodByDateError());
  }
}

export function* apodSaga() {
  yield takeLatest(GET_APOD_START, fetchApod);
  


}