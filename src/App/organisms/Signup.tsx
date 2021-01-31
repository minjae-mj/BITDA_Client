import React, { useState } from 'react';
import MainSubmitBtn from '../atoms/MainSubmitBtn';
import InputsWithBtn from '../molecules/InputsWithBtn';
import server from '../../apis/server';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyleDiv = styled.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-primary);
  border-radius: 0px 8px 8px 0px;
  height: 70%;
  background: var(--color-white);
`;

const TitleDiv = styled.div`
  font-size: 1.6rem;
  color: var(--color-primary);
  positon: relative;
  top: 3rem;
  left: 0rem;
`;

const StyleErrorMessageArea = styled.div`
  height: 2rem;
  color: red;
  text-align: center;
  align-items: center;
  font-size: 1.3rem;
  margin-top: 1rem;
  font-family: 'sans-serif';
`;

let Signup = () => {
  let history = useHistory();

  const [userInfo, setUserInfo] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  let inputInfo = [
    { placeholder: '이름', type: 'userName' },
    { placeholder: '이메일', type: 'email' },
    { placeholder: '비밀번호(8자리 이상)', type: 'password' },
    { placeholder: '비밀번호 확인', type: 'confirmPassword' },
  ];

  const isEmail = (email: string) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
  };

  let inputHandler = (e: any): void => {
    let target = e.target.value;
    let type = e.target.dataset.type;

    setUserInfo({ ...userInfo, [type]: target });
  };

  let submitHandler = async () => {
    const { userName, email, password, confirmPassword } = userInfo;
    if (
      userName.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setErrorMessage('공백을 모두 입력해주세요');
    } else if (confirmPassword !== password) {
      setErrorMessage('비밀번호가 일치하지 않습니다');
    } else if (password.length < 8) {
      setErrorMessage('비밀번호는 8자리 이상으로 적어주세요');
    } else if (!isEmail(email)) {
      setErrorMessage('이메일 형식이 올바르지 않습니다');
    } else {
      try {
        let sendUserInfo = await server.post(
          '/users/signup',
          { userName, email, password }
        );
        localStorage.setItem('oauth', 'local');
        alert('정상적으로 회원가입 되었습니다.');
        history.push('/users/signin');
      } catch (err) {
        setErrorMessage('중복된 이메일입니다.');
      }
    }
  };

  return (
    <StyleDiv>
      <TitleDiv>빚다의 회원이 되어주세요!</TitleDiv>
      <InputsWithBtn inputInfo={inputInfo} inputHandler={inputHandler} />
      <StyleErrorMessageArea>{errorMessage}</StyleErrorMessageArea>
      <MainSubmitBtn text={'회원가입'} submitHandler={submitHandler} />
    </StyleDiv>
  );
};

export default Signup;
