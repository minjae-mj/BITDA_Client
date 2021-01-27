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
  text-align: center;
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
  color: #43658b;
  font-size: 1.5em;
`;

let ImgWithInfo = ({ info }: Props): JSX.Element => {
  return (
    <StyleDrinkCard>
      <StyledDrinkImg src={info.drinkImage} alt={info.drinkName} />
      <StyledDrinkName>{info.drinkName}</StyledDrinkName>
      <div>{info.alcohol}%</div>
    </StyleDrinkCard>
  );
};
export default ImgWithInfo;
