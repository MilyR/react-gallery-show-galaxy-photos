import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_APOD_START,
  GET_APOD_BY_DATE_START,
  GET_APOD_BY_PERIOD_START,
} from './apod.constants.ts';
import ApodService from './apod.api.ts';
import {
  getApodSuccess,
  getApodError,
  getApodByDateSuccess,
  getApodByDateError,
  getApodByPeriodSuccess,
  getApodByPeriodError,
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

function* fetchApodByPeriod(action) {
  try {
    const service = new ApodService();
    const { startDate, endDate } = action.payload; 
    const apod = yield call(service.getApodByPeriod, startDate, endDate);
    yield put(getApodByPeriodSuccess(apod.data));
  } catch (e) {
    yield put(getApodByPeriodError());
  }
}

export function* apodSaga() {
  yield takeLatest(GET_APOD_START, fetchApod);
  yield takeLatest(GET_APOD_BY_DATE_START, fetchApodByDate);
  yield takeLatest(GET_APOD_BY_PERIOD_START, fetchApodByPeriod);
}