import React, { useState } from 'react'; 
import styled from 'styled-components'; 

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
  }
  
  return (
    <StyleDrinkDescContainer>
      <StyleTabContainer>
        {["소개", "이야기"].map((text) => {
          if(tab === text){
            return <StyleTabActive onClick={handleClickTab}>{text}</StyleTabActive>
          } else {
            return <StyleTab onClick={handleClickTab}>{text}</StyleTab>
          }
        })}
      </StyleTabContainer>
      <StyleContent>
        {tab === "소개" ?
        <StyleIntro>
          <div>{drink.drinkName}</div>
          <p>‘{drink.origin}’에서 온 ‘{drink.type}’입니다.‘{drink.price}’의 '{drink.taste}’을 찾으시는 분께 추천합니다!</p>
          <div>도수: {drink.alcohol}%</div>
          <div>원재료: {drink.ingredients}</div>
         </StyleIntro> :
         <div>{drink.desc}</div> }
      </StyleContent>  
    </StyleDrinkDescContainer>
  )
}

export default DrinkDescContainer; 

const StyleDrinkDescContainer = styled.div`
  flex-basis: 88%; 
  padding: 0 1.5rem; 
  

  // background-color: yellow; 
`
const StyleTabContainer = styled.div`
  display: flex;
  height: 4rem; 
  font-size: 1.8rem; 
  cursor: pointer; 

  // background-color: lightblue; 
`
const StyleTab = styled.span` 
  outline: none;
  padding: 1rem 1.8rem; 
  background-color: #BADCF6;  
  border-top-left-radius: 5px; 
  border-top-right-radius: 5px; 

  &:hover {
    background-color: #A4CAED;  
  }
`
const StyleTabActive = styled(StyleTab)`
  background-color: #A4CAED;  
`
const StyleContent = styled.div`
  height: 31rem; 
  font-size: 2.2rem; 
  padding: 1rem 1.8rem; 
  background-color: #A4CAED; 
  border-top-right-radius: 5px; 

  display: flex; 
  align-items: center; 
`
const StyleIntro = styled.div`
  display: flex; 
  flex-direction: column; 
`