import React from 'react'; 
import Logo from '../atoms/Logo'; 
import NavBtn from '../atoms/NavBtn'; 

interface NavBtnProps {
  isLogin: boolean;
}

const NavBar = (props: NavBtnProps) => {

  return (
    <nav>
       <Logo />
       <NavBtn isLogin={props.isLogin} />
    </nav>
  )
}

export default NavBar; 