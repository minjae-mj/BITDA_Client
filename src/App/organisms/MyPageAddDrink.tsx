import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import server from '../../apis/server';
import MainSubmitBtn from '../atoms/MainSubmitBtn';
import InputsWithBtn from '../molecules/InputsWithBtn';
import styled from 'styled-components';

const StyleDesc = styled.textarea`
  border: 1px solid #4E89AE;
  border-radius: 5px;
  margin: 1rem auto;
  width: 60%;
  height: 30vh;
`;
const StyleDiv = styled.div`
  flex-basis : 40%;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  border-radius : 0px 8px 8px 0px;
  height : 70%;
  background : var(--color-white);
`;

const StyleLabelClick = styled.label`
display: flex;
color: #F6F5F5; 
background-color: var(--color-secondary); 
border: 1px solid var(--color-secondary); 
border-radius: 5px; 
font-size: 1.5rem; 
// height: 4.8rem;
margin: 5px auto; 
padding: 10px;
justify-content: center;
align-items: center;
&:hover {
  color: #4E89AE; 
}
cursor:pointer;
&:focus {
  color: #4E89AE
}
`
const HiddenInput = styled.input`
  display: none;
`
const StyleImage = styled.img`
  width: 10rem; 
  height: 5rem;
  font-size: 20px;


`

const MyPageAddDrink = (): JSX.Element => {
  const [fileName,setFileName] = useState('');
  let history = useHistory();
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
    console.log(drinkData);
  };
  const onChange = (e: any) => {
    setDrinkData({ ...drinkData, drinkImage: e.target.files[0] });
  };
  const handleDesc = (key: string) => (e: any) => {
    setDrinkData({ ...drinkData, [key]: e.target.value });
  };

  const [imgBase64, setImgBase64] = useState("")
  const [imgFile, setImgFile] = useState(null)
  const handleChangeFile = (e: any) => {
    let reader = new FileReader;
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64){
        setImgBase64(base64.toString());
      }
    }
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
      setImgFile(e.target.files[0]);
    }
     }

  let addDrinkHandler = async () => {
    try {
      const formData = new FormData();
      formData.append('img', drinkData.drinkImage, drinkData.drinkImage.name);
      setFileName(drinkData.drinkImage.name);
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
      // const textArea: any = document.querySelector('.textArea')
      // textArea.value = "";
      history.push('/addDrink')
      window.location.reload();
      console.log(drinkData.drinkImage);
    } catch (err) {
      console.log(err);
    }
  };


//FileReader
  return (
    <div>
      <StyleDiv>
      <InputsWithBtn inputInfo={inputInfo} inputHandler={inputHandler} />
      <StyleDesc className = 'textArea' placeholder= '설명' onChange={handleDesc('desc')} />
      {/* <StyleLabelClick htmlFor="image_uploads">이미지 등록</StyleLabelClick> */}
      <div style={{"backgroundColor": "#efefef", "width":"150px", "height" : "150px"}}>
      </div>
    <input type="text" id="fileName" className="file_input_textbox" value = {drinkData.drinkImage.name}></input>
     <HiddenInput type='file' accept="image/*,.pdf" id="imgFile" name="imgFile" onChange={handleChangeFile} />
       <MainSubmitBtn text={'등록'} submitHandler={addDrinkHandler} />
      </StyleDiv>
    </div>
  );
};
export default MyPageAddDrink;
