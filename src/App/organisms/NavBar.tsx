import React, { useEffect } from 'react';
import { signIn } from '../../actions'; 
import { useDispatch } from 'react-redux'; 
import Logo from '../atoms/Logo';
import NavBtn from '../molecules/NavBtn';
import server from '../../apis/server';

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
    <nav>
      <Logo />
      <NavBtn />
    </nav>
  );
};

export default NavBar;
