// ACTION TYPES
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const UPDATE_TOKEN = "UPDATE_TOKEN"; 

export const UPDATE_TYPES = "UPDATE_TYPES"
export const UPDATE_RESET = "UPDATE_RESET"

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
export const updateTypes = (type: string, value: string) => {
  return {
    type: UPDATE_TYPES,
    payload: {
      [type]: value
    }
  }
}
