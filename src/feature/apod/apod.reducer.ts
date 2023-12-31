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
  GET_APOD_BY_PERIOD_ERROR,
  GET_APOD_BY_PERIOD_CANCEL,
} from './apod.constants.ts';

const initialState = {
  dataApod: {
    date: null,
    title: null,
    explanation: null,
    service_version: null,
    url: '',
  }
};

export default function apodReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case GET_APOD_START: {
      return {...state}
    }

  const initialState = {
      dataApod: {
        date: null,
        title: null,
        explanation: null,
        service_version: null,
        url: '',
      }
    }; 

    case GET_APOD_SUCCESS: {
      const newState = {
        ...state,
        dataApod: {
          date: action.payload.date,
          url: action.payload.url,
          title: action.payload.title,
          explanation: action.payload.explanation,
          service_version: action.payload.service_version
        }
      }
      return newState;
    }
    case GET_APOD_ERROR: {
      break;
    }
    case GET_APOD_CANCEL: {
      break;
    }
    case GET_APOD_BY_DATE_START: {
      return {...state}
    }
    case GET_APOD_BY_DATE_SUCCESS: {
      console.log({payload: action.payload})
      const newState = {
        ...state,
        dataApod: {
          date: action.payload.date,
          url: action.payload.url,
          title: action.payload.title,
          explanation: action.payload.explanation,
          service_version: action.payload.service_version
        }
      }
      return newState;
    }
    case GET_APOD_BY_DATE_ERROR: {
      break;
    }
    case GET_APOD_BY_DATE_CANCEL: {
      break;
    }

    case GET_APOD_BY_PERIOD_START: {
      return {...state}
    }
    case GET_APOD_BY_PERIOD_SUCCESS: {
      return {...state}
    }
    case GET_APOD_BY_PERIOD_ERROR: {
      break;
    }
    case GET_APOD_BY_PERIOD_CANCEL: {
      break;
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}