import React from 'react'
import MainSubmitBtn from '../atoms/MainSubmitBtn'
import TagWithBtn from '../molecules/TagWithBtn'

const MainSelectSection = (): JSX.Element => {
  
  let typeCategory = ['탁주/막걸리','약주/청주','과실주','증류주']
  let priceCategory = ['1만원 이하','1~2만원','2~3만원','3~4만원','4만원 이상']
  let tasteCategory = ['달콤함','탄산감','바디감','고소함','깔끔함']
  let alcoholeCategory = ['약한편','있는편',]
  
  return (
    <div>
      <div>당신의 취향은?</div>
      <TagWithBtn title={'종류'} category={typeCategory}/>
      <TagWithBtn title={'가격'} category={priceCategory}/>
      <TagWithBtn title={'맛'} category={tasteCategory}/>
      <TagWithBtn title={'도수'} category={alcoholeCategory}/>
      <MainSubmitBtn text={'취향 빚기'} />
      <MainSubmitBtn text={'전체 보기'} />
    </div>
  )
}

export default MainSelectSection;



