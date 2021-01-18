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

interface InitialState {
  accessToken: string;
  isLogin: boolean;
  isAdmin: 0 | 1; 
  drinkList: Drink[]; 
  bookmarkList: Drink[]; 
}

export const initialState =
{
  accessToken: '',
  isLogin: false, 
  isAdmin: 0,
  drinkList: [],
  bookmarkList: []
}