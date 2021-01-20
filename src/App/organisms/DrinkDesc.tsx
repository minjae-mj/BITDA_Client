import React, { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; 
import DrinkDescContainer from "../molecules/DrinkDescContainer"; 
import DetailTransparentBtn from '../atoms/DetailTransparentBtn';
import DetailColoredBtn from "../atoms/DetailColoredBtn"
import styled from "styled-components"; 
import dummyDrinks from "./dummyDrinks"; 
import axios from 'axios';
import { RootState } from '../../reducers';

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
  bookMark: string;
}

const StyleDrinkDesc = styled.div`
  display: flex;
  justify-content: space-around; 
`

const DrinkDesc = (): JSX.Element => {
  const state = useSelector((state: RootState )=> state.signinReducer)
  const { isLogin } = state; 
  const { drinkId }: Params = useParams(); 
  const [drink, setDrink] = useState<DrinkInfo>(dummyDrinks[1]);  

  useEffect(() => {
    // axios.get('http://localhost:8080/drinks/detail/${drinkId}', {
    //  Authorization: `Bearer accessToken`
    // })

    setDrink({
      "id": "1",
      "drinkName": "청양 산딸기주",
      "type": "과실주",
      "price": "3~4만원",
      "taste": "달콤함",
      "ingredients": "산딸기, 설탕",
      "alcohol": "14",
      "origin": "강남도",
      "url": "https://www.google.com",
      "desc": "맑은 계곡 따라 쪼로록 핀 산딸기주, 디저트와 곁들여 보세요",
      "drinkImage": "https://t1.daumcdn.net/cfile/blog/176CED3F4FCBB39C23",
      "bookMark": "true" 
    });
  }, [drinkId]); 

  const handleAddBookmark = () => {
    if(!isLogin) {
      return alert('로그인 해 주세요.')
    } 

    // axios.get('http://localhost:8080/drinks/like', { 
    //   headers: {
    //     Authorization: `Bearer accessToken`
    //   },
    //   data: {
    //     drinkId
    //   }
    // }); 
    console.log("Bookmark added.")
  }

  const handleRemoveBookmark = () => {
    // axios.get('http://localhost:8080/drinks/unlike', { 
    //   headers: {
    //     Authorization: `Bearer accessToken`
    //   },
    //   data: {
    //     drinkId
    //   }
    // }); 
    console.log("Bookmark removed.")
  }

  return (
    <StyleDrinkDesc>
      <img style={{
          backgroundColor: 'lightblue',
          width: "35%",
          height: "30vh",
        }} src={drink.drinkImage}/>
      <div>
        <DrinkDescContainer drink={drink} />
        <div>
          <DetailTransparentBtn text="구매하러가기" href={drink.url} />
          {!isLogin ? 
            <DetailColoredBtn text="내 취향으로 등록" handleClick={handleAddBookmark} />
            : <DetailColoredBtn text="내 취향에서 삭제" handleClick={handleRemoveBookmark} />}      
        </div>
      </div>
    </StyleDrinkDesc>
  ); 
}

export default DrinkDesc; 