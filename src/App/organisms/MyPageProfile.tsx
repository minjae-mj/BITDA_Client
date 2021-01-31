import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../actions';
import { RootState } from '../../reducers';
import server from '../../apis/server';
import { StyleBtnBookmarkSml } from '../atoms/BtnBookmark';
import { StyleBtnWithEventBlueSml } from '../atoms/BtnWithEventBlue';
import { StyledInputProfile } from '../atoms/Inputs';

interface Users {
  id: number | null;
  userName: string;
  email: string;
  userImage: string;
  createdAt: string;
  provider: string;
  admin: number;
}

const MyPageProfile = (): JSX.Element => {
  const state = useSelector((state: RootState) => state.signinReducer);
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');
  const [userInfo, setUserInfo] = useState<Users>({
    id: 0,
    userName: '',
    email: '',
    userImage: '',
    createdAt: '',
    provider: '',
    admin: 0,
  });
  const [nameModal, setNameModal] = useState(false);
  const [changedUsername, setChangedUsername] = useState('');
  const [passwordModal, setPasswordModal] = useState(false);
  const [passwords, setPasswords] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [change, setChange] = useState(false);

  useEffect(() => {
    const userInfo = state.user;
    setUserInfo(userInfo);

  }, [change]);

  useEffect(() => {
    const userInfo = state.user;
    setUserInfo(userInfo);
  });

  const updateUserInfo = async (newToken: string) => {
    try {
      const user = await server.get('/users/mypage', {
        headers: {
          Authorization: `Bearer ${newToken}`,
        },
      });

      const { data } = user;
      dispatch(signIn(data));
      localStorage.setItem('accessToken', newToken);
      setChange((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  let uploadingImg = async (e: any) => {
    let imageFile: string | Blob = e.target.files[0];
    let imgName: string = e.target.files[0].name;
    const img = new FormData();
    img.append('img', imageFile, imgName);

    try {
      let uploading = await server.patch('/users/modifyuser', img, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'content-type': 'multipart/form-data',
        },
      });

      alert('이미지가 변경되었습니다.');
      updateUserInfo(uploading.data.accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  let submitUserName = async () => {
    if (changedUsername === '') {
      setNameModal(false);
      return;
    }

    try {
      let changeUsername = await server
        .patch(
          '/users/modifyuser',
          { userName: changedUsername },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => res.data)
        .then((data) => updateUserInfo(data.accessToken));

      alert('닉네임이 변경되었습니다.');
      setNameModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const inputPasswordHandler = (e: any) => {
    let target = e.target.value;
    let type = e.target.dataset.type;

    setPasswords({ ...passwords, [type]: target });
  };

  let submitPassword = async () => {
    if (
      !passwords.password &&
      !passwords.newPassword &&
      !passwords.confirmPassword
    ) {
      setPasswordModal(false);
      return;
    }

    if (
      passwords.newPassword !== passwords.confirmPassword ||
      passwords.newPassword === ''
    ) {
      alert('새 비밀번호를 확인해주세요.');
      return;
    }

    try {
      let isCurrentCorrect = await server
        .post(
          '/users/modifypassword',
          {
            password: passwords.password,
            newPassword: passwords.newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => res.data)
        .then((data) => updateUserInfo(data.accessToken));

      alert('비밀번호가 변경되었습니다.');
      setPasswordModal(false);
    } catch (err) {
      console.log(err);
      alert('현재 비밀번호를 다시 확인해주세요.');
    }
  };

  const { userName, email, userImage, createdAt } = userInfo;

  return (
    <div>
      <StyleProfileBox>
        <StyleImage src={userImage} alt="userImage" />
        <StyleLabelClick htmlFor="image_uploads">이미지 변경</StyleLabelClick>
        <HiddenInput
          type="file"
          accept="image/*,.pdf"
          id="image_uploads"
          name="image_uploads"
          onChange={uploadingImg}
        />
      </StyleProfileBox>
      <StyleProfileForm>
        <StyleFormElement>
          <span>이메일: </span>
          <span>{email}</span>
        </StyleFormElement>

        <StyleFormElement>
          <span>닉네임: </span>
          <span>{userName}</span>
          <StyleBtnWithEventBlueSml onClick={() => setNameModal((pre) => !pre)}>
            닉네임 변경하기
          </StyleBtnWithEventBlueSml>
          {!nameModal ? (
            <StyleEmptyDiv />
          ) : (
            <div>
              <StyledInputProfile
                type="text"
                placeholder="변경 후 닉네임을 입력해주세요."
                onChange={(e) => setChangedUsername(e.target.value)}
              />
              <StyleBtnBookmarkSml onClick={submitUserName}>
                변경 확인
              </StyleBtnBookmarkSml>
            </div>
          )}
        </StyleFormElement>

        <StyleFormElement>
          <span>가입일: </span>
          <span>{createdAt.slice(0, 10)}</span>
        </StyleFormElement>

        {userInfo.provider !== 'google' && userInfo.provider !== 'kakao' ? (
          <StyleFormElement>
            <span>비밀번호 관리</span>
            <StyleBtnWithEventBlueSml
              onClick={() => setPasswordModal((pre) => !pre)}
            >
              비밀번호 변경하기
            </StyleBtnWithEventBlueSml>
            {!passwordModal ? (
              <StyleEmptyDiv />
            ) : (
              <div>
                <StyledInputProfile
                  type="password"
                  data-type="password"
                  placeholder="현재 비밀번호 8자리"
                  onChange={inputPasswordHandler}
                />
                <StyledInputProfile
                  type="password"
                  data-type="newPassword"
                  placeholder="새 비밀번호 8자리"
                  onChange={inputPasswordHandler}
                />
                <StyledInputProfile
                  type="password"
                  data-type="confirmPassword"
                  placeholder="새 비밀번호 8자리 확인"
                  onChange={inputPasswordHandler}
                />
                <StyleBtnBookmarkSml onClick={submitPassword}>
                  변경 확인
                </StyleBtnBookmarkSml>
              </div>
            )}
          </StyleFormElement>
        ) : null}
      </StyleProfileForm>
    </div>
  );
};

export default MyPageProfile;

const StyleProfileBox = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.3rem 5rem;
  font-size: 1.2rem;
`;
const StyleImage = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  border: solid 3px var(--color-secondary);
`;
const StyleLabelClick = styled.label`
  cursor: pointer;
  color: #4e89ae;
  margin-top: 1.6rem;
  margin-left: 3.5rem;
`;
const StyleProfileForm = styled.div`
  font-size: 1.6rem;

  color: #808080;
  border-left: 5px solid #4e89ae;
  padding: 2.3rem 5rem;
  margin-top: 4.5rem;
`;
const StyleFormElement = styled.div`
  margin: 1.8rem 0;
`;
const StyleEmptyDiv = styled.div`
  height: 4.8rem;
`;
const HiddenInput = styled.input`
  display: none;
`;
