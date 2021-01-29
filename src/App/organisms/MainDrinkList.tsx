import React from 'react';
import styled from 'styled-components';
import ImgWithInfo from '../molecules/ImgWithInfo';
import { Link } from 'react-router-dom';

interface Props {
  isFiltered: boolean;
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
  width: 70%;
  margin-top: 2rem;
`;

const StyleDrinkListTitle = styled.div`
  font-size: 1.7rem;
  color: #43658b;
  font-weight: 500;
  padding: 0.5rem;
  border-bottom: solid 1px lightgray;
  margin-left: 1rem;
`;

const StyledDrinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const StyledDrinkItem = styled.li`
  width: 23%;
  height: 20em;
  margin: 1%;
  border-radius: 11px;
  box-shadow: 0.5rem 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.16);
`;

let MainDrinkList = ({ drinkList, isFiltered }: Props): JSX.Element => {
  return (
    <StyleDrinkListContent>
      <StyledDrinkListArea>
        <StyleDrinkListTitle>
          {isFiltered ? '내 취향 전통주' : '모든 전통주'}
        </StyleDrinkListTitle>
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
