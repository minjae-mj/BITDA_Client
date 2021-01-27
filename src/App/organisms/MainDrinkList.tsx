import React from 'react';
import styled from 'styled-components';
import ImgWithInfo from '../molecules/ImgWithInfo';
import { Link } from 'react-router-dom';

interface Props {
  drinkList: {
    id: number;
    drinkName: string;
    drinkImage: string;
    alcohol: number;
  }[];
}

const StyleDrinkListContent = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDrinkListArea = styled.div`
  width: 83%;
`;

const StyledDrinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const StyledDrinkItem = styled.li`
  width: 30rem;
  height: 45rem;
  margin: 0.7rem;
`;

let MainDrinkList = ({ drinkList }: Props): JSX.Element => {
  return (
    <StyleDrinkListContent>
      <StyledDrinkListArea>
        <StyledDrinkList>
          {drinkList.map(
            (drink): JSX.Element => (
              <StyledDrinkItem key={drink.id}>
                <Link to={`/drinks/detail/${drink.id}`}>
                  <ImgWithInfo info={drink} />
                </Link>
              </StyledDrinkItem>
            )
          )}
        </StyledDrinkList>
      </StyledDrinkListArea>
    </StyleDrinkListContent>
  );
};

export default MainDrinkList;
