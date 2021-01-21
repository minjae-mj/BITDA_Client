import React, { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux'; 
import { RootState } from '../../reducers'; 
import MainDrinkList from '../organisms/MainDrinkList';
import MainSelectSection from '../organisms/MainSelectSection';
import axios from 'axios';
// import styled from 'styled-components'; 

const Main = (): JSX.Element => {
  const state = useSelector((state: RootState) => state.personalTypeReducer); 
  const [drinkList, setDrinkList] = useState([]); 

  let submitHandler = async () => {
    // 유저 조합을 보냄
    let submitAll = await axios.post('http://localhost:8080/drinks/list/type', {
      ...state.types
    })
  }
  
  let selectAllHandler = async () => {
    let submitAll = await axios.get('http://localhost:8080/drinks/list')
    let { data } = submitAll; 

    setDrinkList(data); 
  }

  useEffect(() => {
    // 처음 겟요청
  }, [drinkList])

  return (
    <div>
      <MainSelectSection submitHandler={submitHandler} selectAllHandler={selectAllHandler} />
      <MainDrinkList drinkList={drinkList} />
    </div>
  )
}

export default Main; 