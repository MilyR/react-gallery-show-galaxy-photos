import {
  GET_ASTEROID_START,
  GET_ASTEROID_SUCCESS,
  GET_ASTEROID_ERROR,
  GET_ASTEROID_CANCEL,

} from './asteroid.constants.ts';

export const getAsteroidStart = () => (
  {
    type: GET_ASTEROID_START,
  }
)

export const getAsteroidSuccess = (payload) => (
  {
    type: GET_ASTEROID_SUCCESS,
    payload
  }
)

export const getAsteroidError = () => (
  {
    type: GET_ASTEROID_ERROR,
  }
)

export const getAsteroidCancel = () => (
  {
    type: GET_ASTEROID_CANCEL,
  }
)


