import { combineReducers } from 'redux';
import personalTypeReducer from './personalTypeReducer'
// 우리 리듀서 만들어서 import.
// import itemReducer from './itemReducer';
// import notificationReducer from './notificationReducer';
// userReducer,
// drinkReducer

const rootReducer = combineReducers({
  personalTypeReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;