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

  // let placeholderList =['이름','이메일','비밀번호','비밀번호 확인']
  // let inputType =['username','email','password','confirmPassword']
  let inputInfo = [
    {placeholder : '이름', type: 'userName'}, 
    {placeholder : '이메일', type: 'email'},
    {placeholder : '비밀번호', type: 'password'},
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
      alert('비밀번호가 다릅니다.')
    }else{
       try { 
         let sendUserInfo = await axios.post('http://localhost:8080/users/signup',
          { userName,email,password },
          // { headers: { "Content-Type": "application/json" }, withCredentials: true }
          )

          console.log('회원가입 성공')
          console.log(sendUserInfo); 
        
        // 히스토리 푸시 ('/user/signin')를 적어야함.
        } catch (err) {
          console.log('회원가입 에러')
          console.log(err)
        }
    }
  }

  return (
    <div>
      <InputsWithBtn inputInfo={inputInfo} inputHandler={inputHandler} />
      <MainSubmitBtn text={'회원가입'} submitHandler={submitHandler}/>
    </div>
  )
}

export default Signup ;