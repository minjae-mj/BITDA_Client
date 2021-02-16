import React from 'react';
import styled from 'styled-components';
type Props = {
  info: {
    id: number;
    drinkName: string;
    drinkImage: string;
    alcohol: number;
  };
};

const StyleDrinkCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 21em;
  @media screen and (max-width: 1500px) {
    height: 20em;
  }
`;

const StyledDrinkImg = styled.img`
  width: 100%;
  height: 18em;
  border-radius: 6px;
  transition: all 200ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 1500px) {
    height: 14em;
  }
`;

const StyledDrinkName = styled.span`
  margin-top: 1rem;
  margin-left: 1rem;
  color: #58595b;
  font-size: 1.5rem;
  font-weight: bold;
  @media screen and (max-width: 1500px) {
    font-size: 1.2rem;
  }
`;

const StyledDrinkAlcohol = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  color: #58595b;
  margin-left: 1rem;
`;

let ImgWithInfo = ({ info }: Props): JSX.Element => {
  return (
    <StyleDrinkCard>
      <StyledDrinkImg src={info.drinkImage} alt={info.drinkName} />
      <StyledDrinkName>{info.drinkName}</StyledDrinkName>
      <StyledDrinkAlcohol>도수: {info.alcohol}%</StyledDrinkAlcohol>
    </StyleDrinkCard>
  );
};
export default ImgWithInfo;
