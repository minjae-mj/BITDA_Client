import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers'; 
import MainSubmitBtn from '../atoms/MainSubmitBtn';
import TagWithBtn from '../molecules/TagWithBtn';
import axios from 'axios'


const MainSelectSection = (): JSX.Element => {
  const state = useSelector((state: RootState) => state.personalTypeReducer.types);
  
  let typeButtonList = ['탁주/막걸리','약주/청주','과실주','증류주']
  let priceButtonList = ['1만원 이하','1~2만원','2~3만원','3~4만원','4만원 이상']
  let tasteButtonList = ['달콤함','탄산감','바디감','고소함','깔끔함']
  let alcoholeButtonList = ['약한편','있는편',]

  let submitHandler = async () => {
    let submitAll = await axios.post('http://localhost:8080/drinks/list/type', {
      data: state
    })
    
    console.log('현재 리덕스에 있는 상태')
    console.log(state)
  }
  let selectAllHandler = async () => {
    let submitAll = await axios.get('http://localhost:8080/drinks/list')

    console.log('dont worry, its clicked !!!!')
  }

  return (
    <div>
      <div>당신의 취향은?</div>
      <TagWithBtn title={'종류'} buttonList={typeButtonList} type={'category'}/>
      <TagWithBtn title={'가격'} buttonList={priceButtonList} type={'price'}/>
      <TagWithBtn title={'맛'} buttonList={tasteButtonList} type={'taste'}/>
      <TagWithBtn title={'도수'} buttonList={alcoholeButtonList} type={'alcohol'}/>
      <MainSubmitBtn text={'취향 빚기'} submitHandler={submitHandler} />
      <MainSubmitBtn text={'전체 보기'} submitHandler={selectAllHandler} />
    </div>
  )
}

export default MainSelectSection;