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
      <StyleImageBox> 
        <img style={{
            backgroundColor: 'lightblue',
            width: "38rem",
            height: "inherit"
          }} src={drink.drinkImage}/>
          {isLogin && drink.bookmark ? 
          <StyleLikeIcon>
            <LikeIcon />
          </StyleLikeIcon> : ""}
      </StyleImageBox>
      <StyleDrinkDescBox>
          <DrinkDescContainer drink={drink} />
          <StyleButtonContainer>
            <BtnPlain text="구매하러가기" handleClick={handleRedirect} />
            {isLogin && drink.bookmark ? 
              <BtnWithEvent text="내 취향에서 삭제" handleClick={handleRemoveBookmark} />
              : <BtnWithEvent text="내 취향으로 등록" handleClick={handleAddBookmark} />}      
          </StyleButtonContainer>
      </StyleDrinkDescBox>
    </StyleDrinkDesc>
  ); 
}

export default DrinkDesc; 

const StyleDrinkDesc = styled.div` 
  display: flex;
  width: 80%;
  margin: 2rem auto; 

  // border: 1px solid black;
`
const StyleImageBox = styled.div`
  position: relative;
  width: 45%; 
  height: 50vh; 
  flex-basis: 40%;
  text-align: center; 

  // border: 1px solid green;
`
const StyleLikeIcon = styled.div`
  position: absolute; 
  top: 1.7rem; 
  left: 5.8rem; 
`
const StyleDrinkDescBox = styled.div`
  flex-basis: 60%;
  display: flex; 
  flex-direction: column; 

  // border: 1px solid red;
`
const StyleButtonContainer = styled.div`
  text-align: center;
  display: flex; 
  justify-content: space-evenly; 

  // background-color: pink; 
`