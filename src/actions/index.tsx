// ACTION TYPES
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const UPDATE_TOKEN = "UPDATE_TOKEN"; 
export const UPDATE_TYPES = "UPDATE_TYPES"
export const UPDATE_REVIEW_LIST = "UPDATE_REVIEW_LIST"

enum Admin {
  false = 0,
  true = 1
}

export interface Auth {
  type: string; 
  payload: {
    user: {
      id: number | null ; 
      userName: string;
      email: string;
      userImage: string;
      createdAt: string;
      provider: string;
      admin: number; 
    }; 
  }
}

interface Reviews {
  id: number;
  text: string;
  rating: number;
  user: {
      id: number;
      userName: string;
      userImage: string;
  }
}

interface User {
  id: number | null ; 
  userName: string;
  email: string;
  userImage: string;
  createdAt: string;
  provider: string;
  admin: number; 
}

// ACTION CREATORS
// signin reducers
export const signIn = (user: User): Auth => {
  return {
    type: SIGN_IN,
    payload: {
      user
    }
  }
}

export const signOut = (): Auth => {
  return {
    type: SIGN_OUT,
    payload: {
      user: {
        id: null, 
        userName: "",
        email: "",
        userImage: "",
        createdAt: "",
        provider: "",
        admin: 0
      },
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
