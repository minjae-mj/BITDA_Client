import React,{useState} from 'react';

const MyPageAddDrink = (): JSX.Element =>{

  const [drinkData, setDrinkData] = useState({
    drinkName: '',
    type: '',
    price : '',
    taste: '',
    ingredient : '',
    origin : '',
    url : '',
    desc : '',
    alcohol : 0,
    drinkImage : null,
  })

  

  return <div>전통주 등록 </div>;
}

export default MyPageAddDrink;