import React, { useEffect } from 'react';
import Logo from '../atoms/Logo';
import NavBtn from '../molecules/NavBtn';
import server, { clientURL } from '../../apis/server';

const NavBar = (): JSX.Element => {
  // let isLogin = localStorage.getItem('isLogin')
  const accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
    if (accessToken) {
      getUserInfo();
    }
  }, []);

  let getUserInfo = async () => {
    try {
      console.log('정보 요청d');
      let user = await server.get('/users/mypage', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const { data } = user;
      console.log(data);
      //setUserInfo({ userInfo, ...data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav>
      <Logo />
      <NavBtn />
    </nav>
  );
};

export default NavBar;
