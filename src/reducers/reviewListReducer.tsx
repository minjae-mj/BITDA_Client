import { UPDATE_REVIEW_LIST } from "../actions";
import { initialState } from "./initialState";

export interface ReviewList {
  type: string; 
  payload: {
    reviewList :  Reviews[];
  }
}

export interface Reviews {
  id: number;
  text: string;
  rating: number;
  user: {
      id: number;
      userName: string;
      userImage: string;
  }
}


const reviewReducer = (state = initialState, action: ReviewList) => {

  switch (action.type) {
    case UPDATE_REVIEW_LIST:
      return {...state, ...action.payload }

    default:
      return state;
  }
}

export default reviewReducer; 