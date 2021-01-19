import { combineReducers } from 'redux';
import signinReducer from './signinReducer'
import personalTypeReducer from './personalTypeReducer'

const rootReducer = combineReducers({
  signinReducer,
  personalTypeReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;