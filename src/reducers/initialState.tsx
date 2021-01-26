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
  user: {
    id: number | null ; 
    userName: string;
    email: string;
    userImage: string;
    createdAt: string;
    provider: string;
    admin: number; 
  }; 
  types: {
    category: string;
    alcohol: string;
    price: string;
    taste: string;
  }; 
}

export const initialState: InitialState =
{
  accessToken: '',
  isLogin: false, 
  isAdmin: 0,
  drinkList: [],
  bookmarkList: [],
  reviewList : [],
  user: {
    id: null, 
    userName: "",
    email: "",
    userImage: "",
    createdAt: "",
    provider: "",
    admin: 0
  },
  types: {
    category: "",
    price: "",
    taste: "",
    alcohol: "",
  }
}