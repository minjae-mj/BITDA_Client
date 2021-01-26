import React, { useEffect } from 'react';
import { signIn } from '../../actions'; 
import { useDispatch } from 'react-redux'; 
import Logo from '../atoms/Logo';
import NavBtn from '../molecules/NavBtn';
import server from '../../apis/server';
import styled from 'styled-components';

let StyledNav = styled.nav`
  display : flex;
  justify-content: space-between;
  padding : 1.2rem 4rem;
  align-items: center;
  box-shadow: 0 2px 7px #d3d3d3;
  background : var(--color-white);
  position : fixed;
  top:0px;
  left:0px;
  z-index: 1;
  width : 100%;
`;

const NavBar = (): JSX.Element => {
  const accessToken = localStorage.getItem('accessToken');
  const dispatch = useDispatch(); 

  const getUserInfo = async () => {
    try {
      const user = await server.get('/users/mypage', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const { data } = user;
      dispatch(signIn(data)); 
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getUserInfo();
    }
  }, []);

  return (
    <StyledNav>
      <Logo />
      <NavBtn />
    </StyledNav>
  );
};

export default NavBar;
