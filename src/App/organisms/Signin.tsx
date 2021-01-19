import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers'; 
import { signIn } from '../../actions'
import MainSubmitBtn from '../atoms/MainSubmitBtn'
import InputsWithBtn from '../molecules/InputsWithBtn'
import google from '../../images/google_oauth.png'; 
import kakao from '../../images/kakao_oauth.png';
import axios from 'axios'; 

interface LoginInfo {
  data: {
    admin: number; 
    accessToken: string;
  }
}

let Signin = () =>{
  const [info, setInfo] = useState({
    email: "",
    password: ""
  })

  let placeholderList =['email','password']; 

  const state = useSelector((state: RootState) => state.personalTypeReducer.types);
  const dispatch = useDispatch();

  const inputHandler = (e: any) => {
    let target: string = e.target.value; 
    let type: string = e.target.placeholder; 

    setInfo({ ...info, [type]: target }); 
  }

  const submitHandler = async () => {
    let getLoginInfo = await axios('http://localhost:8080/users/signin', {
      data: info
    })

    const { data }: LoginInfo = getLoginInfo; 
    dispatch(signIn(data.admin, data.accessToken)); 
  }
  
  return (
    <div>
      <InputsWithBtn placeholderList={placeholderList} inputHandler={inputHandler} />
      <div>
        <img src={kakao} alt='Kakao Oauth'/>
      </div>
      <div>
        <img src={google} alt='Google Oauth'/>
      </div>
      <MainSubmitBtn submitHandler={submitHandler} text={'로그인하기'}/>
      <Link to='/users/signup'>
        <MainSubmitBtn text={'회원가입'}/>
      </Link>
    </div>
  )
}

export default Signin ;