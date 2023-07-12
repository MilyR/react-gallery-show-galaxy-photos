import {
  GET_APOD_START,
  GET_APOD_SUCCESS,
  GET_APOD_ERROR,
  GET_APOD_CANCEL,
} from './apod.constants.ts';

export const getApodStart = () => (
  {
    type: GET_APOD_START,
  }
)

export const getApodSuccess = (payload) => (
  {
    type: GET_APOD_SUCCESS,
    payload
  }
)

export const getApodError = () => (
  {
    type: GET_APOD_ERROR,
  }
)

export const getApodCancel = () => (
  {
    type: GET_APOD_CANCEL,
  }
)
