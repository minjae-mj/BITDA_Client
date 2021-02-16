import { UPDATE_TYPES } from '../actions'
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
    case UPDATE_TYPES: 
      return {... state, types: {... state.types, ... action.payload} }

    default:
    return state;
  }
}

export default personalTypeReducer; 