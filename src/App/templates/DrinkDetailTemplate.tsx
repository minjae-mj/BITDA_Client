import React from 'react'; 
import DrinkDesc from '../organisms/DrinkDesc'; 
import Review from '../organisms/Review'; 
import styled from 'styled-components'; 

const StyleDrinkDetailTemplate = styled.div`
  max-width: 100%;
  margin: 1rem auto; 
  margin-top: 10.2rem; 
`

const DrinkDetailTemplate = (): JSX.Element => {
  
  return (
    <StyleDrinkDetailTemplate>
      <DrinkDesc />
      <Review />
    </StyleDrinkDetailTemplate>
  )
}

export default DrinkDetailTemplate; 