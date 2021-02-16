import React from 'react';
import styled from 'styled-components';
import ImgWithInfo from '../molecules/ImgWithInfo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
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
  color: var(--color-primary);
  font-weight: bold;
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
  height: 21em;
  margin: 1%;
  border-radius: 11px;
  box-shadow: 0.5rem 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.16);
  @media screen and (max-width: 1500px) {
    height: 17em;
  }
`;

const StyledEmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  color: #58595b;
  text-align: center;
  line-height: 2;
`;

let MainDrinkList = ({ drinkList, isFiltered }: Props): JSX.Element => {
  const accessToken = localStorage.getItem('accessToken');
  const state = useSelector(
    (state: RootState) => state.signinReducer.user.userName
  );

  return (
    <StyleDrinkListContent>
      <StyledDrinkListArea>
        <StyleDrinkListTitle>
          {isFiltered ? '내 취향 전통주' : '모든 전통주'}
        </StyleDrinkListTitle>
        {drinkList.length ? (
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
        ) : (
          <StyledEmptyList>
            {accessToken ? `${state}님` : `여러분`}의 취향에 알맞는 전통주를
            찾지 못하였습니다.
            <br />
            더욱 더 발전하는 빚다가 되겠습니다.
          </StyledEmptyList>
        )}
      </StyledDrinkListArea>
    </StyleDrinkListContent>
  );
};

export default MainDrinkList;
