import { combineReducers } from 'redux';
import signinReducer from './signinReducer'
import personalTypeReducer from './personalTypeReducer'
import reviewListReducer from './reviewListReducer'

const rootReducer = combineReducers({
  signinReducer,
  personalTypeReducer,
  reviewListReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;