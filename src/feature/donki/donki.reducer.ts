import {
  GET_DONKI_START,
  GET_DONKI_SUCCESS,
  GET_DONKI_ERROR,
  GET_DONKI_CANCEL,
} from './donki.constants.ts';

const initialState = {
  dataDonki: {
    date: null,
    title: null,
    explanation: null,
    service_version: null,
    url: '',
  }
};

export default function donkiReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case GET_DONKI_START: {
      return {...state}
    }
    case GET_DONKI_SUCCESS: {
      console.log({payload: action.payload})
      const newState = {
        ...state,
        dataDonki: {
          date: action.payload.date,
          url: action.payload.url,
          title: action.payload.title,
          explanation: action.payload.explanation,
          service_version: action.payload.service_version
        }
      }
      return newState;
    }
    case GET_DONKI_ERROR: {
      break;
    }
    case GET_DONKI_CANCEL: {
      break;
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}
