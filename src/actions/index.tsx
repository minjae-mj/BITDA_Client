// 리덕스에 담을 상태값 정하기
// token, isLogin, drinkList, bookmarkList

// 상태값 변경할 타입 정하기 = action types
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const UPDATE_TOKEN = "UPDATE_TOKEN"

enum Admin {
  false = 0,
  true = 1
}

interface Auth {
  type: string; 
  payload: {
    admin?: Admin;  
    isLogin?: boolean; 
    accessToken: string; 
  }
}

// 변경할 로직 짜기 = action creators
export const signIn = (admin: Admin, accessToken: string): Auth => {
  return {
    type: SIGN_IN,
    payload: {
      admin,
      isLogin: true,
      accessToken
    }
  }
}

export const signOut = (): Auth => {
  return {
    type: SIGN_OUT,
    payload: {
      admin: 0,
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