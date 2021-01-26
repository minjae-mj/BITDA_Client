import React from 'react'; 
import styled from 'styled-components';
import LandingFirstInfo from '../molecules/LandingFirstInfo'; 

const StyledDiv = styled.div`
// bacground : url();
`;




const LandingFirst = (): JSX.Element => {
  return (
    <div>
      <div></div> 
      {/* <StyledDiv></StyledDiv>  */}
      <LandingFirstInfo />
    </div>
  )
}

export default LandingFirst; 