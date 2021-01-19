interface Drink {
  id: number; 
  drinkName: string; 
  type: string;
  price: string;
  taste: string; 
  ingredients: string; 
  alcohol: number; 
  origin: string; 
  url: string; 
  desc: string; 
  drinkImage: string; 
}

export interface InitialState {
  accessToken: string;
  isLogin: boolean;
  isAdmin: 0 | 1; 
  drinkList: Drink[]; 
  bookmarkList: Drink[]; 
  types: {
    category: string;
    alcohol: string;
    price: string;
    taste: string;
  }
}

export const initialState: InitialState =
{
  accessToken: '',
  isLogin: false, 
  isAdmin: 0,
  drinkList: [],
  bookmarkList: [],
  types: {
    category: "",
    price: "",
    taste: "",
    alcohol: "",
  }
}