import React, { useEffect, useState } from 'react';  
import styled from 'styled-components'; 
import Input from '../atoms/Inputs'
import BtnWithEvent from '../atoms/BtnWithEvent';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers'; 
import server from '../../apis/server'; 

interface Users {
    id : number | null; 
    userName : string;
    email : string;
    userImage : string; 
    createdAt : string; 
    provider : string;
    admin : number;
}

const MyPageProfile = (): JSX.Element => {
  const state = useSelector((state : RootState) => state.signinReducer)
  const accessToken = localStorage.getItem('accessToken');
  const [userInfo, setUserInfo] = useState<Users>({
    id : 0,
    userName : '',
    email : '',
    userImage : '', 
    createdAt : '',
    provider : '',
    admin : 0,
  });
  const [nameModal, setNameModal ] = useState(false);
  const [changedUsername, setChangedUsername ] = useState({userName : ''});
  const [passwordModal, setPasswordModal ] = useState(false);
  const [passwords, setPasswords ] = useState({
    password : '',
    newPassword : '',
    confirmPassword : ''
  });

  let getUserInfo = async () =>{ 
    const userInfo = state.user
    setUserInfo(userInfo); 
    // try{
    //   let user = await server.get('/users/mypage',
    //   {headers : {
    //     Authorization : `Bearer ${accessToken}`}
    //   })
    //   const {data} = user
    //   setUserInfo({userInfo, ...data})
    // } catch(err){
    //   console.log(err)
    // }
  }

  useEffect(() => {
    getUserInfo();
  },[])

  let uploadingImg = async (e : any) =>{
    let imageFile : string | Blob = e.target.files[0]
    let imgName : string = e.target.files[0].name
    const img = new FormData();
    img.append('img' , imageFile , imgName);
    // console.log(img)
    // console.log(img.has('img'))
    // console.log(img.get('img'))
    try{
      let uploading = await server.patch('/users/modifyuser',
      img, 
      {headers : {
        Authorization : `Bearer ${accessToken}`,
        'content-type': 'multipart/form-data',
      }})

      alert('이미지가 변경되었습니다.')
    }catch(err){ 
      console.log(err)
    }
  }

  let inputUserInfo = [
    {placeholder : '변경하실 닉네임을 입력해주세요', type: 'userName'},
  ]

  let inputUsernameHandler = (e: any) =>{
    let target = e.target.value;
    let type = e.target.dataset.type;

    setChangedUsername({...changedUsername,[type]: target }); 
    console.log(changedUsername)
  }

  let inputPasswordInfo = [
    {placeholder : '현재 비밀번호를 입력해주세요', type: 'password'},
    {placeholder : '새 비밀번호를 입력해주세요', type: 'newPassword'},
    {placeholder : '새 비밀번호를 한번 더 입력해주세요', type: 'confirmPassword'}
  ]

  const inputPasswordHandler = (e: any) => {
    let target = e.target.value;
    let type = e.target.dataset.type;

    setPasswords({ ...passwords, [type]: target }); 
    console.log(passwords)
  }

  let submitUserName = async () =>{
    try{
      let changeUsername = await server.patch('/users/modifyuser',{userName : changedUsername.userName}, 
      {headers : {
        Authorization : `Bearer ${accessToken}`
      }})

      alert('닉네임이 변경되었습니다.')
    }catch(err){
      console.log(err)
    }
  }

  let handleClick = async () => {
    if(passwords.newPassword !== passwords.confirmPassword ||
    passwords.newPassword === ''){
      alert('새 비밀번호를 확인해주세요.')
      return;
    }
    
    try{
      let isCurrentCorrect = await server.post('/users/modifypassword',
      {
        password : passwords.password ,
        newPassword : passwords.newPassword
      },
      {headers : {
        Authorization : `Bearer ${accessToken}`
      }})      
      alert('비밀번호가 변경되었습니다.')
    } catch(err){
      console.log(err)
      alert('현재 비밀번호를 다시 확인해주세요.')
    }
  }

  const { userName, email, userImage, createdAt } = userInfo; 

  return (
    <div>
      <StyleProfileBox>
        <StyleImage src={userImage} alt='userImage'/>
        <StyleLabelClick htmlFor="image_uploads">이미지 변경</StyleLabelClick>
        <HiddenInput type='file' accept="image/*,.pdf" id="image_uploads" name="image_uploads" onChange={uploadingImg} />
      </StyleProfileBox>  
      <StyleProfileForm>
        <div>
          <span>Eamil : </span><span>{email}</span>
        </div>

        <div>
          <div>
            <span>Username : </span> <span>{userName}</span>
            {!nameModal ? null : 
            <>
              <Input inputInfo={inputUserInfo} inputHandler={inputUsernameHandler} />
              <BtnWithEvent text='닉네임 변경하기' handleClick={submitUserName}/>
            </>  
            }
          </div>
          <button onClick={()=> setNameModal(pre => !pre)}>변경하기</button>
        </div>

        <div>
          <span>가입일</span><span>{createdAt}</span>
        </div>

        <div>
          <div>비밀번호 관리</div>
          <button onClick={()=> setPasswordModal(pre => !pre)}>비밀번호 변경하기</button>
          {!passwordModal ? null : (
            <>
              <Input inputInfo={inputPasswordInfo} inputHandler={inputPasswordHandler} />
              <BtnWithEvent text='패스워드 변경하기' handleClick={handleClick}/>
            </>
          )}
        </div>
        
      </StyleProfileForm>
    </div>
  )
}

export default MyPageProfile; 

const StyleMyPageProfile = styled.div`
 
`
const StyleProfileBox = styled.div`
  height: 20vh;   
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  padding: 2.3rem 5rem; 
  font-size: 1.2rem; 

  // border: 1px solid green; 
`
const StyleImage = styled.img`
  width: 10rem; 
  height: 10rem;
  border-radius: 50%; 

  background-color: var(--color-primary); 
`
const StyleLabelClick = styled.label`
  cursor: pointer;
  color: #4E89AE; 
  margin-top: 3px; 
  margin-left: 2.2rem;  
`

const StyleProfileForm = styled.div`
  height: 50vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-around; 
  font-size: 1.6rem; 
  padding: 2.3rem 5rem; 

  // border: 1px solid red; 
`

const HiddenInput = styled.input`
  display: none;
`
// label을 버튼 처럼 꾸미기