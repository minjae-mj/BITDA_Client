import React from 'react'
import MainSubmitBtn from '../atoms/MainSubmitBtn'
import TagWithBtn from '../molecules/TagWithBtn'
import axios from 'axios'

const MainSelectSection = (): JSX.Element => {
  
  let typeButtonList = ['탁주/막걸리','약주/청주','과실주','증류주']
  let priceButtonList = ['1만원 이하','1~2만원','2~3만원','3~4만원','4만원 이상']
  let tasteButtonList = ['달콤함','탄산감','바디감','고소함','깔끔함']
  let alcoholeButtonList = ['약한편','있는편',]

  let submitHandler = async () => {
    // 리덕스에서 선택된녀석들을 가지고와서, 보내기
    // let submitAll = await axios.post('http://localhost:8080/drinks/list/type',/* types */)
    console.log('dont worry, its clicked !!!!')
  }
  let selectAllHandler = async () => {
    let all = {
      type : '',
      price : '',
      taste : '',
      alcohol : ''
    }
    let submitAll = await axios.post('http://localhost:8080/drinks/list/type',all)
    console.log(submitAll)
    console.log('dont worry, its clicked !!!!')
  }

  return (
    <div>
      <div>당신의 취향은?</div>
      <TagWithBtn title={'종류'} buttonList={typeButtonList} type={'type'}/>
      <TagWithBtn title={'가격'} buttonList={priceButtonList} type={'price'}/>
      <TagWithBtn title={'맛'} buttonList={tasteButtonList} type={'taste'}/>
      <TagWithBtn title={'도수'} buttonList={alcoholeButtonList} type={'alcohol'}/>
      <MainSubmitBtn text={'취향 빚기'} submitHandler={submitHandler} />
      <MainSubmitBtn text={'전체 보기'} submitHandler={selectAllHandler} />
    </div>
  )
}

export default MainSelectSection;