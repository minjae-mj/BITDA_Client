import React from 'react'; 
import LandingBtn from '../atoms/LandingBtn'; 
import ImageWithText from '../molecules/ImageWithText';

interface Card {
  desc: string; 
  imgUrl: string; 
}

const LandingThird = (): JSX.Element => {

  const card: Card[] = [
    {
      desc: '취향기반 전통주 추천',
      imgUrl: 'imgUrl-1'
    },
    {
      desc: '전통주 사러 바로 가기',
      imgUrl: 'imgUrl-2'
    },
    {
      desc: '내 마음에 드는 전통주 키핑',
      imgUrl: 'imgUrl-3'
    }
  ]

  return (
    <div>
      <h2>빚다에서 무엇을 할 수 있나요?</h2>
      <div>
        {
         card.map(info => (
           <div key={info.desc}>
             <ImageWithText info={info} />
           </div>
         ))
        }
      </div>
        <LandingBtn text="전통주 보러가기" />
    </div>
  )
}

export default LandingThird; 
