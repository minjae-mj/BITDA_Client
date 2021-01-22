// ACTION TYPES
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const UPDATE_TOKEN = "UPDATE_TOKEN"; 

export const UPDATE_TYPES = "UPDATE_TYPES"
// export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
// export const UPDATE_PRICE = "UPDATE_PRICE"
// export const UPDATE_TASTE = "UPDATE_TASTE"
// export const UPDATE_ALCOHOL = "UPDATE_ALCOHOL"

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
// export const updateCategory = (clickedItem: string) => {
//   return {
//     type: UPDATE_CATEGORY,
//     payload: {
//       category: clickedItem
//     }
//   }
// }

// export const updatePrice = (clickedItem: string) => {
//   return {
//     type: UPDATE_PRICE,
//     payload: {
//       price: clickedItem
//     }
//   }
// }

// export const updateTaste = (clickedItem: string) => {
//   return {
//     type: UPDATE_TASTE,
//     payload: {
//       taste: clickedItem
//     }
//   }
// }

// export const updateAlcohol = (clickedItem: string) => {
//   return {
//     type: UPDATE_ALCOHOL,
//     payload: {
//       alcohol: clickedItem
//     }
//   }
// }

export const updateTypes = (type: string, value: string) => {
  return {
    type: UPDATE_TYPES,
    payload: {
      [type]: value
    }
  }
}