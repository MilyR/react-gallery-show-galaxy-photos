import {
  GET_APOD_START,
  GET_APOD_SUCCESS,
  GET_APOD_ERROR,
  GET_APOD_CANCEL,
  GET_APOD_BY_DATE_START,
  GET_APOD_BY_DATE_SUCCESS,
  GET_APOD_BY_DATE_ERROR,
  GET_APOD_BY_DATE_CANCEL,
  GET_APOD_BY_PERIOD_START,
  GET_APOD_BY_PERIOD_SUCCESS,
  GET_APOD_BY_PERIOD_CANCEL,
  GET_APOD_BY_PERIOD_ERROR,
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

export const getApodByDateStart = (payload) => (
  {
    type: GET_APOD_BY_DATE_START,
    payload,
  }
)

export const getApodByDateSuccess = (payload) => (
  {
    type: GET_APOD_BY_DATE_SUCCESS,
    payload
  }
)

export const getApodByDateError = () => (
  {
    type: GET_APOD_BY_DATE_ERROR,
  }
)

export const getApodByDateCancel = () => (
  {
    type: GET_APOD_BY_DATE_CANCEL,
  }
)

export const getApodByPeriodStart= (payload) => (
  {
    type: GET_APOD_BY_PERIOD_START,
    payload,
  }
)

export const getApodByPeriodSuccess = (payload) => (
  {
    type: GET_APOD_BY_PERIOD_SUCCESS,
    payload
  }
)

export const getApodByPeriodError = () => (
  {
    type: GET_APOD_BY_PERIOD_ERROR,
  }
)

export const getApodByPeriodCancel = () => (
  {
    type: GET_APOD_BY_PERIOD_CANCEL,
  }
)
