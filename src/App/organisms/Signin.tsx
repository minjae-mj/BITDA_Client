import React, { useState,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers'; 
import { signIn } from '../../actions'
import MainSubmitBtn from '../atoms/MainSubmitBtn'
import InputsWithBtn from '../molecules/InputsWithBtn'
import google from '../../images/google_oauth.png'; 
import kakao from '../../images/kakao_oauth.png';
import axios from 'axios'; 
import { Redirect, withRouter } from "react-router-dom";

interface Info {
  email: string;
  password: string;
}

interface LoginInfo {
  data: {
    admin: number; 
    accessToken: string;
  }
}

let Signin = () =>{
  let history = useHistory();
  const [oauth, setOauth] = useState('')
  const [info, setInfo] = useState<Info>({
    email: "",
    password: ""
  })
  const state = useSelector((state: RootState) => state.signinReducer);
  const dispatch = useDispatch();

  let inputInfo = [
    { placeholder: '이메일', type: 'email' },
    { placeholder: '비밀번호', type: 'password' }, 
  ]

  const inputHandler = (e: any) => {
    let target = e.target.value;
    let type = e.target.dataset.type;

    setInfo({ ...info, [type]: target }); 
    console.log(info);
  }

  const submitHandler = async () => {
    try { 
      let getLoginInfo = await axios.post('http://localhost:8080/users/signin', 
       { ...info },
       { headers: { "Content-Type": "application/json" }, 
        withCredentials: true }
      )
      .then((res) => {
        const { data } = res;
        dispatch(signIn(data.admin, data.accessToken)); 
      })

    } catch (err) {
      console.log('로그인 에러')
      console.log(err); 
    }
  }

  // Kakao Oauth 관련
  const redirectUrl:string = 'http://localhost:3000/users/signin'
  const clientIDForKakao:string = 'a58db4c46f3113c111f06599a69d529b'
  const KAKAO_LOGIN_URL : string = `https://kauth.kakao.com/oauth/authorize?client_id=${clientIDForKakao}&redirect_uri=${redirectUrl}&response_type=code`
  
  const kakaoLoginHandler = ( ) : any => {
    window.location.assign(KAKAO_LOGIN_URL)
    setOauth('kakao')
  } 

  // Google Oauth 관련
  const clientIDForGoogle : string = '161712089232-v1udttltgin8n37iou92c03qrckdrvkv.apps.googleusercontent.com'
  const GOOGLE_LOGIN_URL : string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientIDForGoogle}&redirect_uri=${redirectUrl}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`
  const googleLoginHandler = ( ) : any => {
    window.location.assign(GOOGLE_LOGIN_URL)
    setOauth('google')
  }

  useEffect(() : void => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");

    if(authorizationCode) { 
      getAccessToken(authorizationCode);
    }
  })

  let getAccessToken = async (authorizationCode :string | null) =>{

    try {
      const res = await axios.post(`http://localhost:8080/users/kakao`, {authorizationCode})
      const { data } = res;
      dispatch(signIn(data.admin, data.accessToken))
      history.push('/');

      } catch (err) {
        console.log('소셜로그인 에러')
        console.log(err)
      }
    } 

  return (
    <div>
      {/* {!isRedirect ? (<div> */}
      <InputsWithBtn inputInfo={inputInfo} inputHandler={inputHandler} />
      <div onClick={kakaoLoginHandler} >
        <img src={kakao} alt='Kakao Oauth'/>
      </div>
      <div onClick={googleLoginHandler} >
        <img src={google} alt='Google Oauth'/>
      </div>
      <MainSubmitBtn submitHandler={submitHandler} text={'로그인하기'}/>
      <div>아직 회원이 아니신가요?</div>
      <Link to='/users/signup'>
        {/* <MainSubmitBtn text={'회원가입'}/> */}
        <div>회원가입 하러가기</div>
      </Link>
      {/* </div>): <Redirect to='/' /> } */}
    </div>
  )
}
export default withRouter(Signin) ;



// 구글 클라이언트 아이디
// 161712089232-v1udttltgin8n37iou92c03qrckdrvkv.apps.googleusercontent.com

// 카카오 클라이언트 아이디
// a58db4c46f3113c111f06599a69d529b