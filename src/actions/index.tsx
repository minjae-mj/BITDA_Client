// 리덕스에 담을 상태값 정하기
// token, isLogin, drinkList, bookmarkList
// personalType = { category: string;  price: "", taste: "", alcohol : string;
// 상태값 변경할 타입 정하기 = action types
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const UPDATE_TOKEN = "UPDATE_TOKEN"; 

export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const UPDATE_PRICE = "UPDATE_PRICE"
export const UPDATE_TASTE = "UPDATE_TASTE"
export const UPDATE_ALCOHOL = "UPDATE_ALCOHOL"

enum Admin {
  false = 0,
  true = 1
}

export interface Auth {
  type: string; 
  payload: {
    admin?: Admin;  
    isLogin?: boolean; 
    accessToken: string; 
  }
}

// 변경할 로직 짜기 = action creators
// Signin 관련
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

// 메인페이지 유저클릭 관련
export const updateCategory = (clickedItem: string) => {
  return {
    type: UPDATE_CATEGORY,
    payload: {
      category: clickedItem
    }
  }
}

export const updatePrice = (clickedItem: string) => {
  return {
    type: UPDATE_PRICE,
    payload: {
      price: clickedItem
    }
  }
}

export const updateTaste = (clickedItem: string) => {
  return {
    type: UPDATE_TASTE,
    payload: {
      taste: clickedItem
    }
  }
}

export const updateAlcohol = (clickedItem: string) => {
  return {
    type: UPDATE_ALCOHOL,
    payload: {
      alcohol: clickedItem
    }
  }
}

