import React, { useState,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers'; 
import MainSubmitBtn from '../atoms/MainSubmitBtn'
import InputsWithBtn from '../molecules/InputsWithBtn'
import google from '../../images/googleimg.png'; 
import kakao from '../../images/kakaoImg.png';
import server, { clientURL } from '../../apis/server'; 
import styled from 'styled-components';
import signinCard from '../../images/signinCard.png'

interface Info {
  email: string;
  password: string;
}

const LeftCardDiv = styled.div`
  flex-basis : 35%;
  height : 70%;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  align-items: center;
  border : 1px solid var(--color-primary);
  border-radius : 8px 0px 0px 8px;
  background: var(--color-white);
  padding : 4.8rem 1.6rem;
`;
const TitleDiv = styled.div`
  font-size : 1.6rem;
  color : var(--color-primary);
`;
const OauthContainerDiv = styled.div`
  width : 30%;
  display : flex;
  justify-content: space-evenly;
  img {
    cursor: pointer;
    &:hover{
      transform: scale(1.1);
      transition: all 200ms ease-in-out;
    }
  }
`;

const GotoSignup = styled.div`
  color : var(--color-primary);
  &:hover{
    transform: scale(1.1);
    transition: all 100ms ease-in-out;
    border-bottom : 1px solid var(--color-primary);
  }
`;

const RightCardDiv = styled.div`
  display : flex;
  flex-basis : 35%;
  flex-direction : column;
  justify-content : center;
  align-items: center;
  background : var(--color-primary);
  
  width : 100%;
  height : 70%;
  border : 1px solid var(--color-primary);
  border-radius : 0px 8px 8px 0px;
  overflow:hidden;

`;

const StyledSigninCard = styled.img`
  width : 100%;
  height : 100%;
`;


let Signin = () =>{
  let history = useHistory();
  
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
      let getLoginInfo = await server.post('/users/signin', 
      { ...info },
      { headers: { "Content-Type": "application/json" }, 
        withCredentials: true }
      )
      .then((res) => {
        const { data } = res;
        // dispatch(signIn(data.admin, data.accessToken)); 
        localStorage.setItem('isLogin', JSON.stringify(true));
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('oauth', 'local');
        history.push('/')
        window.location.reload();
      })

    } catch (err) {
      console.log('로그인 에러')
      console.log(err); 
    }
  }

  // Kakao Oauth 관련
  const redirectUrl: string = `${clientURL}/users/signin`
  const clientIDForKakao: string = 'a58db4c46f3113c111f06599a69d529b'
  const KAKAO_LOGIN_URL : string = `https://kauth.kakao.com/oauth/authorize?client_id=${clientIDForKakao}&redirect_uri=${redirectUrl}&response_type=code`
  
  const kakaoLoginHandler = ( ) : any => {
    window.location.assign(KAKAO_LOGIN_URL)
    localStorage.setItem('oauth', 'kakao');
  } 

  // Google Oauth 관련
  const clientIDForGoogle: string = '161712089232-v1udttltgin8n37iou92c03qrckdrvkv.apps.googleusercontent.com'
  const GOOGLE_LOGIN_URL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientIDForGoogle}&redirect_uri=${redirectUrl}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`
  const googleLoginHandler = ( ): any => {
    window.location.assign(GOOGLE_LOGIN_URL)
    localStorage.setItem('oauth', 'google');
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
      const oauth = localStorage.getItem('oauth');
      let res; 
      if(oauth === 'kakao') {
        res = await server.post(`/users/kakao`, {authorizationCode})
      } else {
        res = await server.post(`/users/google`, {authorizationCode})
      }
      const { data } = res;
      // dispatch(signIn(data.admin, data.accessToken)); 
      localStorage.setItem('isLogin', JSON.stringify(true));
      localStorage.setItem('accessToken', data.accessToken);
      history.push('/');
      window.location.reload();
      } catch (err) {
        console.log('소셜로그인 에러')
        console.log(err)
      }
    } 

  return (
    <>
      <LeftCardDiv>
        <TitleDiv>로그인하기</TitleDiv>
        <InputsWithBtn inputInfo={inputInfo} inputHandler={inputHandler} />
        <OauthContainerDiv>
          <div onClick={kakaoLoginHandler} >
            <img src={kakao} alt='Kakao Oauth'/>
          </div>
          <div onClick={googleLoginHandler} >
            <img src={google} alt='Google Oauth'/>
          </div>
        </OauthContainerDiv>
        <MainSubmitBtn submitHandler={submitHandler} text={'로그인하기'}/>
        <div>아직 회원이 아니신가요?</div>
        <Link to='/users/signup'>
          <GotoSignup>회원가입 하러가기</GotoSignup>
        </Link>
      </LeftCardDiv>
      <RightCardDiv>
        <StyledSigninCard src={signinCard} alt='signin Card'></StyledSigninCard>
      </RightCardDiv>
    </>
  )
}
export default Signin ;


