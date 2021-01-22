import React from 'react'; 
import Logo from '../atoms/Logo'; 
import NavBtn from '../molecules/NavBtn'; 


const NavBar = (): JSX.Element => {

  return (
    <nav>
       <Logo />
       <NavBtn />
    </nav>
  )
}

export default NavBar; 