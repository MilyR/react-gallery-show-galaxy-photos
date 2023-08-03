import {
  GET_DONKI_START,
  GET_DONKI_SUCCESS,
  GET_DONKI_ERROR,
  GET_DONKI_CANCEL,
} from './donki.constants.ts';

export const getDonkiStart = () => (
  {
    type: GET_DONKI_START,
  }
)

export const getDonkiSuccess = (payload) => (
  {
    type: GET_DONKI_SUCCESS,
    payload
  }
)

export const getDonkiError = () => (
  {
    type: GET_DONKI_ERROR,
  }
)

export const getDonkiCancel = () => (
  {
    type: GET_DONKI_CANCEL,
  }
)

