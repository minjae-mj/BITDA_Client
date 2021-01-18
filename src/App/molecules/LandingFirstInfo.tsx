import React from 'react'; 
import { Link } from 'react-router-dom'; 
import LandingBtn from '../atoms/LandingBtn';

const LandingFirstInfo = (): JSX.Element => {

  return (
    <div>
      <h1>전통주도 내 취향에 맞게<br />취향을 빚다</h1>
      <Link to="/drinks/list">
        <LandingBtn text="전통주 보러가기" />
      </Link>
    </div>
  )
}

export default LandingFirstInfo; 