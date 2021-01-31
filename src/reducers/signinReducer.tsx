import { SIGN_IN, SIGN_OUT, Auth } from "../actions";
import { initialState } from "./initialState";

const signinReducer = (state = initialState, action: Auth) => {

  switch (action.type) {
    case SIGN_IN:
      return {...state, ...action.payload }
    
    case SIGN_OUT:
      return {...state, ...action.payload }

    default:
      return state;
  }
}

export default signinReducer; 