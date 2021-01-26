import React, { useState } from 'react'; 

interface Props {
  drink: {
    drinkName: string; 
    type: string;
    price: string;
    taste: string;
    ingredients: string; 
    alcohol: string;
    origin: string; 
    desc: string;
  }
}

const DrinkDescContainer = ({ drink }: Props) => {
  const [tab,setTab] = useState('소개'); 

  const handleClickTab= (e: any) => {
    const text = e.target.innerText; 
    setTab(text);
    console.log(text);  
  }
  
  return (
    <>
      <div>
        <span onClick={handleClickTab}>소개</span>
        <span onClick={handleClickTab}>이야기</span>
      </div>
      <div>
        {tab === "소개" ?
          <>
         <div>{drink.drinkName}</div>
         <p>‘{drink.origin}’에서 온 ‘{drink.type}’입니다.‘{drink.price}’의 '{drink.taste}’을 찾으시는 분께 추천합니다!</p>
         <div>도수: {drink.alcohol}%</div>
         <div>원재료: {drink.ingredients}</div>
         </> :
         <div>{drink.desc}</div> }
       
      </div>  
    </>
  )
}

export default DrinkDescContainer; 