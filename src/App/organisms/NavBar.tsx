import React from 'react'; 
import Logo from '../atoms/Logo'; 
import NavBtn from '../molecules/NavBtn'; 

interface NavBtnProps {
  isLogin: boolean;
}

const NavBar = (props: NavBtnProps): JSX.Element => {

  return (
    <nav>
       <Logo />
       <NavBtn isLogin={props.isLogin} />
    </nav>
  )
}

export default NavBar; 