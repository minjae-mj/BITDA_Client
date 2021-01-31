import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import MyPageBookmark from './MyPageBookmark';
import MyPageProfile from './MyPageProfile';
import MyPageAddDrink from './MyPageAddDrink';
import styled from 'styled-components';
import BtnWithEventBlue from '../atoms/BtnWithEventBlue';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
const MyPage = (): JSX.Element => {
  const state = useSelector(
    (state: RootState) => state.signinReducer.user.admin
  );

  return (
    <StyleMyPage>
      <StyleMyPageSidebar>
        <Link to="/users/mypage/bookmark">
          <BtnWithEventBlue value="bookmark" text="내 취향 전통주" />
        </Link>
        <Link to="/users/mypage/profile">
          <BtnWithEventBlue value="myProfile" text="프로필 수정" />
        </Link>
        {state ? (
          <Link to="/users/mypage/addDrink">
            <BtnWithEventBlue value="addDrink" text="전통주 등록" />
          </Link>
        ) : (
          ''
        )}
      </StyleMyPageSidebar>

      <StyleMyPageContent>
        <Switch>
          <Route exact path="/users/mypage">
            <MyPageBookmark />
          </Route>
          <Route exact path="/users/mypage/bookmark">
            <MyPageBookmark />
          </Route>
          <Route exact path="/users/mypage/profile">
            <MyPageProfile />
          </Route>
          <Route exact path="/users/mypage/addDrink">
            <MyPageAddDrink />
          </Route>
        </Switch>
      </StyleMyPageContent>
    </StyleMyPage>
  );
};

export default MyPage;

const StyleMyPage = styled.div`
  height: 100vh;
  display: flex;
`;
const StyleMyPageSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 3rem;
  flex-basis: 12%;

  background-color: var(--color-secondary);
`;
const StyleMyPageContent = styled.div`
  flex-basis: 88%;
  padding: 5rem 9rem;
`;
