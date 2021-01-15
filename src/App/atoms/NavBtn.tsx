import React from 'react'; 
import { Link } from 'react-router-dom'; 

interface NavBtnProps {
  isLogin: boolean;
}

const NavBtn = ({ isLogin }: NavBtnProps) => {

  return (
    <ul>
      <li>
        <Link to={isLogin? "/users/mypage" : "/users/signin"}>
          <button>{isLogin? "마이 페이지" : "로그인"}</button>
        </Link>
      </li>
      <li>
        <Link to={isLogin? "/users/signout" : "/users/signup"}>
          <button>{isLogin? "로그아웃" : "회원가입"}</button>
        </Link>
      </li>
    </ul>
  )
}

export default NavBtn; 

/*
return (
  <div>
  {isLogin ? 
    (<ul>
      <li>
        <Link to="/users/mypage"><button>마이 페이지</button></Link>
      </li>
      <li>
        <Link to="/users/signout"><button>로그아웃</button></Link>
      </li>
    </ul>)
    : (<ul>
        <li>
          <Link to="/users/signup"><button>회원가입</button></Link>
        </li>
        <li>
          <Link to="/users/signin"><button>로그인</button></Link>
        </li>
      </ul>)
  }
  </div>
)
*/