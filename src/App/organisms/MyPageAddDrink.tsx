import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
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
`
const MyPageAddDrink = (): JSX.Element => {
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
    console.log(drinkData)
  };
  
  const onChange = (e: any) => {
    setDrinkData({...drinkData, drinkImage: e.target.files[0]})
  } 

  const handleDesc = (key:string) => (e:any) => {
  
    setDrinkData({...drinkData, [key]: e.target.value });
  };

  let addDrinkHandler = async () => {
   try {
    const formData = new FormData();
    formData.append('img',drinkData.drinkImage, drinkData.drinkImage.name)
    formData.append('drinkName',drinkData.drinkName)
    formData.append('type',drinkData.type)
    formData.append('price',drinkData.price)
    formData.append('taste',drinkData.taste)
    formData.append('ingredients',drinkData.ingredients)
    formData.append('origin',drinkData.origin)
    formData.append('url',drinkData.url)
    formData.append('desc',drinkData.desc)
    formData.append('alcohol',drinkData.alcohol)
      let addDrink = await server.post('/drinks/add', formData);
      history.push('/drinks/list')
      window.location.reload();
      console.log(drinkData.drinkImage)
    } catch (err) {
      console.log(err);
    } 
  };


  return (
    <div>
     
      <InputsWithBtn
        inputInfo={inputInfo}
        inputHandler={inputHandler} 
      /> 
       <StyleDesc onChange = {handleDesc('desc')}/>
        <input type = "file" onChange = {onChange}/>
      <MainSubmitBtn text={'등록'} submitHandler={addDrinkHandler} />
    </div>
  );
};

export default MyPageAddDrink;
