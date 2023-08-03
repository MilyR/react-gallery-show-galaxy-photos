import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  GET_DONKI_START,
} from './donki.constants.ts';
import DonkiService from './donki.api.ts';
import {
  getDonkiSuccess,
  getDonkiError,
} from './donki.action.ts';

function* fetchDonki() {
  try {
    const service = new DonkiService()
    const donki = yield call(service.getDonki);
    console.log({donki})
    yield put(getDonkiSuccess(donki.data));
  } catch (e) {
    yield put(getDonkiError());
  }
}

export function* donkiSaga() {
  yield takeLatest(GET_DONKI_START, fetchDonki);
}
