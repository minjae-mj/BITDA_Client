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
  height: 46rem;
  border-radius: 11px;
  box-shadow: 0.5rem 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.16);
`;

const StyledDrinkImg = styled.img`
  width: 30rem;
  height: 40rem;
  border-radius: 6px;
  &:hover {
    opacity: 0.8;
  }
`;

const StyledDrinkName = styled.span`
  margin-top: 1rem;
  margin-left: 1rem;
  color: #58595b;
  font-size: 1.6em;
  font-weight: 500;
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
