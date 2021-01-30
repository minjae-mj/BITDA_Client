import React, { useState } from 'react'
import MainSubmitBtn from '../atoms/MainSubmitBtn'
import InputsWithBtn from '../molecules/InputsWithBtn'
import server from '../../apis/server'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyleDiv = styled.div`
  flex-basis : 35%;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  border : 1px solid var(--color-primary);
  border-radius : 0px 8px 8px 0px;
  height : 70%;
  background : var(--color-white);
`;

const TitleDiv = styled.div`
  font-size : 1.6rem;
  color : var(--color-primary);
  // margin : 3.2rem 0rem 2.4rem 0rem;
  positon : relative;
  top : 3rem;
  left:0rem;
`;

let Signup = () =>{
  let history = useHistory();

  const [userInfo, setUserInfo] = useState({
    userName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  let inputInfo = [
    {placeholder : '이름', type: 'userName'}, 
    {placeholder : '이메일', type: 'email'},
    {placeholder : '비밀번호(8자리 이상)', type: 'password'},
    {placeholder : '비밀번호 확인', type: 'confirmPassword'},
  ]

  let inputHandler = (e : any) : void  => {
    let target = e.target.value;
    let type = e.target.dataset.type;

    setUserInfo({ ...userInfo ,[type] : target})
  }

  let submitHandler = async () => {
    const { userName, email, password,confirmPassword} = userInfo;
    if( userName.length === 0 || 
        email.length === 0 ||  
        password.length === 0 || 
        confirmPassword.length === 0 ){
      alert('빈칸을 다 채워 주세요!')
    }else if( confirmPassword !== password){
      alert('비밀번호가 일치하지 않습니다.')
    }else if(password.length < 8 ){
      alert('비밀번호는 8자리 이상으로 적어주세요.')
    }else if( !email.includes('@') || 
    !(email[email.length -1] !== 'm' ||
      email[email.length -2] !== 'o' ||
      email[email.length -3] !== 'c' ||
      email[email.length -1] !== '.')){
      alert('작성하진 이메일이 형식에 맞지 않습니다.')
    }else{
      try { 
        let sendUserInfo = await server.post('/users/signup',
        { userName,email,password },
        // { headers: { "Content-Type": "application/json" }, withCredentials: true }
        )
        localStorage.setItem('oauth', 'local');
        alert('정상적으로 회원가입 되었습니다.')
        history.push('/users/signin');
      } catch (err) {
        alert('이미 존재하는 이메일입니다.')
      }
    }
  }

  return (
    <StyleDiv>
      <TitleDiv>빚다의 회원이 되어주세요!</TitleDiv>
      <InputsWithBtn inputInfo={inputInfo} inputHandler={inputHandler} />
      <MainSubmitBtn text={'회원가입'} submitHandler={submitHandler}/>
    </StyleDiv>
  )
}

export default Signup ;