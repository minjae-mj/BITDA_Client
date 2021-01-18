import React from 'react'; 
import styled from 'styled-components'; 
import MyPageChangeBtn from '../atoms/MyPageChangeBtn'; 

const StyleMyPageProfile = styled.div`
  width: 100%; 

  background-color: gold; 
`

const StyleProfileBox = styled.div`
  height: 20vh;   
  display: flex; 
  padding: 1rem 1.5rem; 

  border: 1px solid green; 
`

const StyleProfileForm = styled.div`
  height: 50vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-around; 
  padding: 1rem 1.5rem; 

  border: 1px solid red; 
`

const MyPageProfile = (): JSX.Element => {
  
  return (
    <StyleMyPageProfile>
      <StyleProfileBox>
        <div>
          <img src="userImage"/>
          <MyPageChangeBtn text="이미지 변경" />
        </div>
        <div>닉네임</div>
      </StyleProfileBox>  
      <StyleProfileForm>
        <div>
          <input type="email" placeholder="email" />
        </div>
        <div>
        <input type="text" placeholder="username" />
        <MyPageChangeBtn text="변경" />
        </div>
        <div>
          <span>가입일</span>
        </div>
        <div>
          <div>비밀번호 관리</div>
          <MyPageChangeBtn text="변경" />
        </div>
      </StyleProfileForm>
    </StyleMyPageProfile>
  )
}

export default MyPageProfile; 