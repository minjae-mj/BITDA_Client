import React from 'react'; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import logo from '../../images/Logo.png'

const StyledLogo = styled.img`
  width : 8.2rem;
  height : 5.8rem;
`;


const Logo = (): JSX.Element => {
  return (
    <div>
      <Link to="/">
          <StyledLogo src={logo} alt='Logo'></StyledLogo>
      </Link>
    </div>
  )
}

export default Logo; 