import React, { useState } from 'react'
import MainSubmitBtn from '../atoms/MainSubmitBtn'
import InputsWithBtn from '../molecules/InputsWithBtn'
import axios from 'axios'

let Signup = () =>{
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
    if( confirmPassword !== password){
      alert('비밀번호가 일치하지 않습니다.')
    }else if(password.length < 8 ){
      alert('비밀번호는 8자리 이상으로 적어주세요.')
    }else if( !email.includes('@') || !email.includes('.com')){
      alert('작성하진 이메일이 형식에 맞지 않습니다..')
    }else{
      try { 
        let sendUserInfo = await axios.post('http://localhost:8080/users/signup',
        { userName,email,password },
        // { headers: { "Content-Type": "application/json" }, withCredentials: true }
        )

        console.log('정상적으로 회원가입 되었습니다.')
        console.log(sendUserInfo); 
      } catch (err) {
        console.log('회원가입 에러')
        console.log(err)
      }
    }
  }

  return (
    <div>
      <InputsWithBtn inputInfo={inputInfo} inputHandler={inputHandler} /* errMsg={'hi'}*//>
      <MainSubmitBtn text={'회원가입'} submitHandler={submitHandler}/>
    </div>
  )
}

export default Signup ;