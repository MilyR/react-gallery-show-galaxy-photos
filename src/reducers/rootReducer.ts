import {combineReducers} from 'redux';

//import authReducer from './auth/reducer';

const rootReducer = combineReducers ({
});

export type AuthState =ReturnType<typeof rootReducer>;

export default rootReducer;