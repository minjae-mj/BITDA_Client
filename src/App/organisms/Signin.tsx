import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import MainSubmitBtn from '../atoms/MainSubmitBtn';
import InputsWithBtn from '../molecules/InputsWithBtn';
import google from '../../images/googleimg.png';
import kakao from '../../images/kakaoImg.png';
import server, { clientURL } from '../../apis/server';
import styled from 'styled-components';
import signinCard from '../../images/signinCard.png';

interface Info {
  email: string;
  password: string;
}

const LeftCardDiv = styled.div`
  flex-basis: 35%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-primary);
  border-radius: 8px 0px 0px 8px;
  background: var(--color-white);
  padding: 4.8rem 1.6rem;
  font-size: 1.6rem;

  @media screen and (max-width: 720px) {
    font-size: 1.2rem;
  }
`;
const TitleDiv = styled.div`
  font-size: 1.6rem;
  color: var(--color-primary);
`;
const OauthContainerDiv = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  img {
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: all 200ms ease-in-out;
    }
  }
  @media screen and (max-width: 720px) {
    div {
      margin: 0rem 0.8rem;
    }
  }
`;

const GotoSignup = styled.div`
  color: var(--color-primary);
  &:hover {
    transform: scale(1.1);
    transition: all 100ms ease-in-out;
    border-bottom: 1px solid var(--color-primary);
  }
`;

const RightCardDiv = styled.div`
  display: flex;
  flex-basis: 35%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-primary);

  width: 100%;
  height: 70%;
  border: 1px solid var(--color-primary);
  border-radius: 0px 8px 8px 0px;
  overflow: hidden;
`;

const StyledSigninCard = styled.img`
  width: 100%;
  height: 100%;
`;
const StyleErrorMessageArea = styled.div`
  color: red;
  text-align: center;
  align-items: center;
  font-size: 1.3rem;
  margin-top: 1rem;
  height: 2rem;
  font-family: 'sans-serif';
`;

let Signin = () => {
  let history = useHistory();

  const [info, setInfo] = useState<Info>({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  let inputInfo = [
    { placeholder: '이메일', type: 'email' },
    { placeholder: '비밀번호', type: 'password' },
  ];

  const inputHandler = (e: any) => {
    let target = e.target.value;
    let type = e.target.dataset.type;

    setInfo({ ...info, [type]: target });
  };

  const submitHandler = async () => {
    try {
      if (!info.email.length) {
        setErrorMessage('이메일을 입력해주세요');
      } else if (!info.password.length) {
        setErrorMessage('비밀번호를 입력해주세요');
      } else {
        let getLoginInfo = await server
          .post(
            '/users/signin',
            { ...info },
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            }
          )
          .then((res) => {
            const { data } = res;
            localStorage.setItem('isLogin', JSON.stringify(true));
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('oauth', 'local');
            history.push('/');
            window.location.reload();
          });
      }
    } catch (err) {
      setErrorMessage('이메일 혹은 비밀번호가 일치하지 않습니다');
    }
  };

  const redirectUrl: string = `${clientURL}/users/signin`;
  const clientIDForKakao: string = 'a58db4c46f3113c111f06599a69d529b';
  const KAKAO_LOGIN_URL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${clientIDForKakao}&redirect_uri=${redirectUrl}&response_type=code`;

  const kakaoLoginHandler = (): any => {
    window.location.assign(KAKAO_LOGIN_URL);
    localStorage.setItem('oauth', 'kakao');
  };

  const clientIDForGoogle: string =
    '161712089232-v1udttltgin8n37iou92c03qrckdrvkv.apps.googleusercontent.com';
  const GOOGLE_LOGIN_URL: string = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientIDForGoogle}&redirect_uri=${redirectUrl}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`;
  const googleLoginHandler = (): any => {
    window.location.assign(GOOGLE_LOGIN_URL);
    localStorage.setItem('oauth', 'google');
  };

  useEffect((): void => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  });

  let getAccessToken = async (authorizationCode: string | null) => {
    try {
      const oauth = localStorage.getItem('oauth');
      let res;
      if (oauth === 'kakao') {
        res = await server.post(`/users/kakao`, { authorizationCode });
      } else {
        res = await server.post(`/users/google`, { authorizationCode });
      }
      const { data } = res;
      localStorage.setItem('isLogin', JSON.stringify(true));
      localStorage.setItem('accessToken', data.accessToken);
      history.push('/');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <LeftCardDiv>
        <TitleDiv>로그인</TitleDiv>
        <InputsWithBtn inputInfo={inputInfo} inputHandler={inputHandler} />

        <MainSubmitBtn submitHandler={submitHandler} text={'로그인하기'} />

        <StyleErrorMessageArea>{errorMessage}</StyleErrorMessageArea>

        <OauthContainerDiv>
          <div onClick={kakaoLoginHandler}>
            <img src={kakao} alt="Kakao Oauth" />
          </div>
          <div onClick={googleLoginHandler}>
            <img src={google} alt="Google Oauth" />
          </div>
        </OauthContainerDiv>
        <div>아직 회원이 아니신가요?</div>
        <Link to="/users/signup">
          <GotoSignup>회원가입 하러가기</GotoSignup>
        </Link>
      </LeftCardDiv>
      <RightCardDiv>
        <StyledSigninCard src={signinCard} alt="signin Card"></StyledSigninCard>
      </RightCardDiv>
    </>
  );
};
export default Signin;
