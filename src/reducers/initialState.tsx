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

export interface InitialState {
  accessToken: string;
  isLogin: boolean;
  isAdmin: 0 | 1; 
  drinkList: Drink[]; 
  bookmarkList: Drink[]; 
  reviewList : Reviews[];
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
  reviewList : [],
  types: {
    category: "",
    price: "",
    taste: "",
    alcohol: "",
  }
}