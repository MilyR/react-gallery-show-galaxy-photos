import {
  GET_APOD_START,
  GET_APOD_SUCCESS,
  GET_APOD_ERROR,
  GET_APOD_CANCEL,
} from './apod.constants.ts';

const initialState = {
  dataApod: {
    date: null,
    title: null,
    url: '',
  }
};

export default function apodReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case GET_APOD_START: {
      return {...state}
    }
    case GET_APOD_SUCCESS: {
      const newState = {
        ...state,
        dataApod: {
          date: action.payload.date,
          url: action.payload.url,
          title: action.payload.title
        }
      }
      return newState;
    }
    case GET_APOD_ERROR: {
      
    }
    case GET_APOD_CANCEL: {
      
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}