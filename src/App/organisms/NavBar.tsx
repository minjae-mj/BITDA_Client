import React, { useEffect } from 'react'; 
import Logo from '../atoms/Logo'; 
import NavBtn from '../molecules/NavBtn'; 


const NavBar = (): JSX.Element => {
  // let isLogin = localStorage.getItem('isLogin')

  // useEffect(()=>{
  //   // window.location.reload();
  // },[])


  

  return (
    <nav>
      <Logo />
      <NavBtn />
    </nav>
  )
}

export default NavBar; 