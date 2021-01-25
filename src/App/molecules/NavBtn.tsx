import React from 'react'; 
import { Link } from 'react-router-dom'; 
import NavCatetoryBtn from '../atoms/NavCategoryBtn'; 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers'; 
import { signOut } from '../../actions'; 
import server from '../../apis/server'; 

const NavBtn = (): JSX.Element => {
  const state = useSelector((state: RootState) => state.signinReducer);
  const dispatch = useDispatch(); 
  const { isLogin, accessToken } = state; 
  const signedIn = isLogin && accessToken; 

  const handleClickLogout = async () => {
    try {
      await server({
        method: 'post',
        url: '/users/signout',
        headers: { Authorization: `Bearer ${accessToken}` } 
      });

      dispatch(signOut());
      localStorage.clear();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ul>
      <li>
        <Link to={signedIn? "/users/mypage" : "/users/signin"}>
          <NavCatetoryBtn text={signedIn? "마이 페이지" : "로그인"} />
        </Link>
      </li>
      <li>
        {signedIn? 
        <NavCatetoryBtn text="로그아웃" handleClick={handleClickLogout} />
        :
        <Link to="/users/signup">
          <NavCatetoryBtn text="회원가입" />
        </Link>
        }
        
      </li>
    </ul>
  )
}

export default NavBtn; 