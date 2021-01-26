import React, { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import styled from "styled-components"; 
import DrinkDescContainer from "../molecules/DrinkDescContainer"; 
import BtnWithEvent from "../atoms/BtnWithEvent"
import BtnPlain from "../atoms/BtnPlain"; 
import server from '../../apis/server';
import LikeIcon from '../atoms/LikeIcon';

interface Params {
  drinkId: string; 
}

interface DrinkInfo {
  id: string; 
  drinkName: string; 
  type: string;
  price: string;
  taste: string;
  ingredients: string; 
  alcohol: string;
  origin: string;
  url: string;
  desc: string;
  drinkImage: string;
  bookmark: boolean | null;
}

const StyleDrinkDesc = styled.div`
  display: flex;
  justify-content: space-around; 
`

const DrinkDesc = (): JSX.Element => {
  const isLogin = localStorage.getItem('isLogin') 
  const accessToken = localStorage.getItem('accessToken') 
  const { drinkId }: Params = useParams(); 
  const [drink, setDrink] = useState<DrinkInfo>({ id: "", 
    drinkName: "", 
    type: "",
    price: "",
    taste: "",
    ingredients: "", 
    alcohol: "",
    origin: "",
    url: "",
    desc: "",
    drinkImage: "",
    bookmark: null });  

  useEffect(() => {
    server({
      method: 'get',
      url: `/drinks/detail/${drinkId}`,
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(res => setDrink(res.data)); 
  }, []); 

  const handleRedirect = () => {
    window.open(drink.url, '_blank'); 
  }

  const handleAddBookmark = () => {
    if(!isLogin) {
      return alert('로그인 해 주세요.')
    } 
    server.post('/drinks/like',{ drinkId }, { headers: { Authorization: `Bearer ${accessToken}`}})
    window.location.reload(); 
  }

  const handleRemoveBookmark = () => {
    server.post('/drinks/unlike',{ drinkId }, { headers: { Authorization: `Bearer ${accessToken}`}})
    window.location.reload();
  }

  return (
    <StyleDrinkDesc>
      <div>
        <img style={{
            backgroundColor: 'lightblue',
            width: "35%",
            height: "30vh",
          }} src={drink.drinkImage}/>
          <LikeIcon />
      <div>
      </div>
        <DrinkDescContainer drink={drink} />
        <div>
          <BtnPlain text="구매하러가기" handleClick={handleRedirect} />
          {isLogin && drink.bookmark ? 
            <BtnWithEvent text="내 취향에서 삭제" handleClick={handleRemoveBookmark} />
            : <BtnWithEvent text="내 취향으로 등록" handleClick={handleAddBookmark} />}      
        </div>
      </div>
    </StyleDrinkDesc>
  ); 
}

export default DrinkDesc; 