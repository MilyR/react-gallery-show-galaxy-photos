import {combineReducers} from 'redux';
import apodReducer from '../feature/apod/apod.reducer.ts';
import asteroidReducer from '../feature/asteroid/asteroid.reducer.ts';
import donkiReducer from '../feature/donki/donki.reducer.ts';

const rootReducer = combineReducers ({
  apod: apodReducer,
  asteroid: asteroidReducer,
  donki: donkiReducer
});

// export type AuthState =ReturnType<typeof rootReducer>;

export default rootReducer;