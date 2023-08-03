import {
  GET_ASTEROID_START,
  GET_ASTEROID_SUCCESS,
  GET_ASTEROID_ERROR,
  GET_ASTEROID_CANCEL,
} from './asteroid.constants.ts';

const initialState = {
  dataAsteroid: {
    date: null,
    title: null,
    explanation: null,
    service_version: null,
    url: '',
  }
};

export default function asteroidReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case GET_ASTEROID_START: {
      return {...state}
    }
    case GET_ASTEROID_SUCCESS: {
      console.log({payload: action.payload})
      const newState = {
        ...state,
        dataAsteroid: {
          date: action.payload.date,
          url: action.payload.url,
          title: action.payload.title,
          explanation: action.payload.explanation,
          service_version: action.payload.service_version
        }
      }
      return newState;
    }
    case GET_ASTEROID_ERROR: {
      break;
    }
    case GET_ASTEROID_CANCEL: {
      break;
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}