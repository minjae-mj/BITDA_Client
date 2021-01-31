import React from 'react';
import { Link } from 'react-router-dom';
import NavCatetoryBtn from '../atoms/NavCategoryBtn';
import { useDispatch } from 'react-redux';
import { signOut } from '../../actions';
import server from '../../apis/server';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
list-style: none;
display: flex;
padding : 0px;
`;
const StyledLi = styled.li`
  padding-left: 3.2rem;
`;

const NavBtn = (): JSX.Element => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');
  const isLogin = localStorage.getItem('isLogin');
  let history = useHistory();

  const handleClickLogout = async () => {
    try {
      await server({
        method: 'post',
        url: '/users/signout',
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      localStorage.clear();

      dispatch(signOut());
      localStorage.setItem('isLogin', JSON.stringify(false));
      history.push('/');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledUl>
      <StyledLi>
        <Link to={isLogin === 'true' ? '/users/mypage' : '/users/signin'}>
          <NavCatetoryBtn
            text={isLogin === 'true' ? '마이 페이지' : '로그인'}
          />
        </Link>
      </StyledLi>
      <StyledLi>
        {isLogin === 'true' ? (
          <NavCatetoryBtn text="로그아웃" handleClick={handleClickLogout} />
        ) : (
          <Link to="/users/signup">
            <NavCatetoryBtn text="회원가입" />
          </Link>
        )}
      </StyledLi>
    </StyledUl>
  );
};

export default NavBtn;
