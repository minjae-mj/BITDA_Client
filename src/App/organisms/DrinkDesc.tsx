import React from 'react'; 
import { useParams } from "react-router-dom";
import DrinkDescContainer from "../molecules/DrinkDescContainer"; 
import DetailTransparentBtn from '../atoms/DetailTransparentBtn';
import DetailColoredBtn from "../atoms/DetailColoredBtn"
import styled from "styled-components"; 

const StyleDrinkDesc = styled.div`
  display: flex;
  justify-content: space-around; 
`

const DrinkDesc = (): JSX.Element => {
  // const { drinkId } = useParams();
  // console.log(`현재 전통주의 아이디: ${drinkId}`)

  return (
    <StyleDrinkDesc>
      <img style={{
          backgroundColor: 'lightblue',
          width: "35%",
          height: "30vh",
        }}/>
      <div>
        <DrinkDescContainer />
        <div>
          <DetailTransparentBtn text="구매하러가기" />
          <DetailColoredBtn text="내 취향으로 등록" />
        </div>
      </div>
    </StyleDrinkDesc>
  ); 
}

export default DrinkDesc; 