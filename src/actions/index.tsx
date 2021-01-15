// 리덕스에 담을 상태값 정하기
// token, isLogin, drinkList, bookmarkList

// 상태값 변경할 타입 정하기 = action types
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const UPDATE_TOKEN = "UPDATE_TOKEN"


// 변경할 로직 짜기 = action creators
export const signIn = (token: string) => {
  return {
    type: SIGN_IN,
    payload: {
      isLogin: true,
      token
    }
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: {
      isLogin: false,
      token: ""
    }
  }
}

export const updateToken = (token: string) => {
  return {
    type: UPDATE_TOKEN,
    payload: {
      token
    }
  }
}