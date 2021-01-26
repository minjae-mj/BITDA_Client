import React from 'react'; 
import { Link } from 'react-router-dom'; 
import logo from '../../images/Logo.png'



const Logo = (): JSX.Element => {
  return (
    <div>
      <Link to="/">
          <img src={logo} alt='Logo'></img>
      </Link>
    </div>
  )
}

export default Logo; 