import React from 'react'
import MainSubmitBtn from '../atoms/MainSubmitBtn'
import InputsWithBtn from '../molecules/InputsWithBtn'


let Signup = () =>{

  let placeholderList =['이름','이메일','비밀번호','비밀번호 확인']
  
  return (
    <div>
      <InputsWithBtn placeholderList={placeholderList} />
      <MainSubmitBtn text={'회원가입'}/>
    </div>
  )
}

export default Signup ;