import {combineReducers} from 'redux';

import apodReducer from '../feature/apod/apod.reducer.ts';

const rootReducer = combineReducers ({
  apod: apodReducer,
});

// export type AuthState =ReturnType<typeof rootReducer>;

export default rootReducer;