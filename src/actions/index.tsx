// ACTION TYPES
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const UPDATE_TOKEN = "UPDATE_TOKEN"; 

export const UPDATE_TYPES = "UPDATE_TYPES"

export const UPDATE_REVIEW_LIST = "UPDATE_REVIEW_LIST"
// export const ADD_REVIEW = "ADD_REVIEW"
// export const DELETE_REVIEW = "DELETE_REVIEW"

enum Admin {
  false = 0,
  true = 1
}

export interface Auth {
  type: string; 
  payload: {
    isAdmin?: Admin;  
    isLogin?: boolean; 
    accessToken: string; 
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

// ACTION CREATORS
// signin reducers
export const signIn = (isAdmin: Admin, accessToken: string): Auth => {
  return {
    type: SIGN_IN,
    payload: {
      isAdmin,
      isLogin: true,
      accessToken
    }
  }
}

export const signOut = (): Auth => {
  return {
    type: SIGN_OUT,
    payload: {
      isAdmin: 0,
      isLogin: false,
      accessToken: ""
    }
  }
}

export const updateToken = (accessToken: string): Auth => {
  return {
    type: UPDATE_TOKEN,
    payload: {
      accessToken
    }
  }
}

// personal type reducers
export const updateTypes = (type: string, value: string) => {
  return {
    type: UPDATE_TYPES,
    payload: {
      [type]: value
    }
  }
}

export const updateReviews = (value: Reviews[])  => {
  return {
    type: UPDATE_REVIEW_LIST,
    payload: {
      reviewList: [...value]
    }
  }
}
// export const addReview = ( value: Reviews) => {
//   return {
//     type: ADD_REVIEW,
//     payload: {
//       newReview : value
//     }
//   }
// }
// export const deleteeview = (value: Reviews) => {
//   return {
//     type: DELETE_REVIEW,
//     payload: {
//       [type]: value
//     }
//   }
// }
