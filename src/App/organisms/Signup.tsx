import React from 'react'
import MainSubmitBtn from '../atoms/MainSubmitBtn'
import InputsWithBtn from '../molecules/InputsWithBtn'


let Signin = () =>{

  let placeholderList =['이메일','비밀번호']
  
  return (
    <div>
      <InputsWithBtn placeholderList={placeholderList} />
      <div>
        <img src='' alt='카카오 오어스'/>
      </div>
      <div>
        <img src='' alt='구글 오어스'/>
      </div>
      <MainSubmitBtn text={'로그인하기'}/>
      <MainSubmitBtn text={'회원가입'}/>
    </div>
  )
}

export default Signin ;