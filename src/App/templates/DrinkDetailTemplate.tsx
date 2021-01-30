import React from 'react';
import DrinkDesc from '../organisms/DrinkDesc';
import Review from '../organisms/Review';
import styled from 'styled-components';

const StyleDrinkDetailTemplate = styled.div`
  max-width: 80%;
  margin: 1rem auto;
  margin-top: 12.2rem;
`;

const DrinkDetailTemplate = (): JSX.Element => {
  return (
    <StyleDrinkDetailTemplate>
      <DrinkDesc />
      <Review />
    </StyleDrinkDetailTemplate>
  );
};

export default DrinkDetailTemplate;
