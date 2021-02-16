import React, { useState, useRef } from 'react';
import server from '../../apis/server';
import MainSubmitBtn from '../atoms/MainSubmitBtn';
import InputsWithBtn from '../molecules/InputsWithBtn';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  width: 80%;
`;

const StyledImageArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledFileInput = styled.input`
  display: none;
`;

const StyledImgUpLoadBtn = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-family: 'sans-serif';
  color: #58595b;
`;

const StyledImgChangeBtn = styled.button`
  width: 13rem;
  height: 3rem;
  background-color: #a4caed;
  border-radius: 6px;
  color: white;
  margin-top: 2rem;
  border: 0;
  &:hover {
    background-color: #4e89ae;
    border: solid 1px #4e89ae;
  }
`;

const StyledDrinkImage = styled.img`
  width: 40rem;
  height: 50rem;
  border-radius: 6px;
`;

const StyledEmptyImage = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: lightgray;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyleDesc = styled.textarea`
  border: 1px solid #a4caed;
  margin-top: 1rem;
  border-radius: 5px;
  width: 80%;
  height: 30vh;
  outline: 0;
`;
const StyledInputArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 8px 8px 0px;
  height: 70%;
  background: var(--color-white);
`;

const StyleBin = styled.i`
  color: #58595b;
  font-size: 5rem;
  margin: 8px 8px;
  cursor: pointer;
`;

const StyleErrorMessageArea = styled.div`
  height: 2rem;
  color: red;
  font-family: 'sans-serif';
  font-size: 1.3rem;
  margin-top: 1rem;
  text-align: center;
`;

const MyPageAddDrink = (): JSX.Element => {
  const [drinkData, setDrinkData] = useState<any>({
    drinkName: '',
    type: '',
    price: '',
    taste: '',
    ingredients: '',
    origin: '',
    url: '',
    desc: '',
    alcohol: 0,
    drinkImage: null,
  });

  const [imagePreviewUrl, setImagePreviewUrl] = useState<any>({
    url: null,
    name: null,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const fileRef: any = useRef();
  
  let inputInfo = [
    { placeholder: '전통주 이름', type: 'drinkName' },
    { placeholder: '종류', type: 'type' },
    { placeholder: '가격대', type: 'price' },
    { placeholder: '맛', type: 'taste' },
    { placeholder: '원재료', type: 'ingredients' },
    { placeholder: '원산지', type: 'origin' },
    { placeholder: '판매처', type: 'url' },
    { placeholder: '도수', type: 'alcohol' },
  ];
  let inputHandler = (e: any): void => {
    let target = e.target.value;
    let type = e.target.dataset.type;
    setDrinkData({ ...drinkData, [type]: target });
  };
  const handleDesc = (key: string) => (e: any) => {
    setDrinkData({ ...drinkData, [key]: e.target.value });
  };

  const handleUpLoadImg = () => {
    fileRef.current.click();
  };

  const handleChangeFile = (e: any) => {
    let reader = new FileReader();
    setDrinkData({ ...drinkData, drinkImage: e.target.files[0] });
    reader.onloadend = () => {
      setImagePreviewUrl({
        url: reader.result,
        name: e.target.files[0],
      });
    };
    reader.readAsDataURL(e.target.files[0]);
    e.target.value = null;
  };

  let addDrinkHandler = async () => {
    try {
      if (!drinkData.drinkImage) {
        setErrorMessage('전통주 이미지를 등록해주세요.');
        return;
      }
      if (!drinkData.drinkName.length) {
        setErrorMessage('전통주 이름을 등록해주세요.');
        return;
      }
      if (!drinkData.type.length) {
        setErrorMessage('전통주 종류를 등록해주세요.');
        return;
      }
      if (!drinkData.price.length) {
        setErrorMessage('전통주 가격대를 등록해주세요.');
        return;
      }
      if (!drinkData.taste.length) {
        setErrorMessage('전통주 맛을 등록해주세요.');
        return;
      }
      if (!drinkData.ingredients.length) {
        setErrorMessage('전통주 원재료를 등록해주세요.');
        return;
      }
      if (!drinkData.origin.length) {
        setErrorMessage('전통주 생산 지역을 등록해주세요.');
        return;
      }
      if (!drinkData.url.length) {
        setErrorMessage('전통주 판매처를 등록해주세요.');
        return;
      }
      if (!drinkData.alcohol) {
        setErrorMessage('전통주 도수를 등록해주세요.');
        return;
      }
      if (!drinkData.desc.length) {
        setErrorMessage('전통주 이야기를 등록해주세요.');
        return;
      }

      const formData = new FormData();
      formData.append('img', drinkData.drinkImage, drinkData.drinkImage.name);
      formData.append('drinkName', drinkData.drinkName);
      formData.append('type', drinkData.type);
      formData.append('price', drinkData.price);
      formData.append('taste', drinkData.taste);
      formData.append('ingredients', drinkData.ingredients);
      formData.append('origin', drinkData.origin);
      formData.append('url', drinkData.url);
      formData.append('desc', drinkData.desc);
      formData.append('alcohol', drinkData.alcohol);
      let addDrink = await server.post('/drinks/add', formData);

      setDrinkData({
        drinkName: '',
        type: '',
        price: '',
        taste: '',
        ingredients: '',
        origin: '',
        url: '',
        desc: '',
        alcohol: 0,
        drinkImage: null,
      });
      setErrorMessage('');
     
     
      const infoInput1: any = document.querySelectorAll('.infoInput');
      for (let el of infoInput1){
        el.value = '';
      }
     
      
     fileRef.current.value = '';
    
     setImagePreviewUrl({
       url : null,
       name : null
    })
   } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledContainer >
      <StyledFileInput
        type="file"
        ref={fileRef}
        accept="image/*"
        id="imgFile"
        name="imgFile"
        onChange={handleChangeFile}
      />
      <StyledImageArea>
        {imagePreviewUrl.url ? (
          <>
            <StyledDrinkImage src={imagePreviewUrl.url} />
            <StyledImgChangeBtn onClick={handleUpLoadImg}>
              이미지 변경
            </StyledImgChangeBtn>
          </>
        ) : (
          <>
            <StyledEmptyImage onClick={handleUpLoadImg}>
              <StyleBin className="fas fa-camera" />
              <StyledImgUpLoadBtn>이미지 등록</StyledImgUpLoadBtn>
            </StyledEmptyImage>
          </>
        )}
      </StyledImageArea>

      <StyledInputArea >
        <InputsWithBtn inputInfo={inputInfo} inputHandler={inputHandler} />
        <StyleDesc className = 'infoInput'
          placeholder="설명"
          onChange={handleDesc('desc')}
        />
        <StyleErrorMessageArea>{errorMessage}</StyleErrorMessageArea>
        <MainSubmitBtn text={'등록'} submitHandler={addDrinkHandler} />
      </StyledInputArea>
    </StyledContainer>
  );
};

export default MyPageAddDrink;
