import { UPDATE_CATEGORY, UPDATE_PRICE, UPDATE_TASTE, UPDATE_ALCOHOL } from "../actions";
import { initialState } from "./initialState";

interface Action {
  type: string; 
  payload: {
    category?: string;
    price?: string;
    taste?: string;
    alcohol?: string;
  }
}

const personalTypeReducer = (state = initialState, action: Action) => {

  switch (action.type) {
    case UPDATE_CATEGORY:
      return {...state, types: { ...state.types, ...action.payload } }
    
    case UPDATE_PRICE:
      return {...state, types: { ...state.types, ...action.payload } }
    
    case UPDATE_TASTE:
      return {...state, types: { ...state.types, ...action.payload } }

    case UPDATE_ALCOHOL:
      return {...state, types: { ...state.types, ...action.payload } }

    default:
      return state;
  }
}

export default personalTypeReducer; 

