import React from 'react'; 
import ImageWithText from '../molecules/ImageWithText'; 

interface Info {
  first: {
    desc: string; 
    imgUrl: string; 
  },
  second: {
    desc: string;
    imgUrl: string; 
  }
}

const LandingSecond = (): JSX.Element => {

  const info: Info = {
    first: {
      desc: `전통주는 탁주 • 약/청주 • 증류주 • 과실주(와인) • 기타주류 총 다섯가지로 분류되며, 
      이 안에서 또 달콤한 술, 산미있는 술, 드라이한 술, 고도수 저도수 등으로 나뉘어지는 다채로운 우리술입니다.`,
      imgUrl: `imgUrl-1`
    }, 
    second: {
      desc: `전국각지 1200군데가 넘는 전통주 양조장에서 만들어지는 술의 6%는 무형문화재와 식품명인이 빚는 술로, 이름 그대로 ‘전통’을 계승하는 전통주이지만, 전체 양조장의 94%는 지역 농산물을 이용해 현대적인 방식으로 만들어지는 ‘지역특산주’입니다.
      전통주, 지금까지 이해하기 어려웠나요?? 전통주는 사실 대부분 올드하지,
      않고 현대적인 ‘우리술’이랍니다! 술담화와 함께 차근차근 알아가보는건 어떠신가요?`,
      imgUrl: `imgUrl-2`
    }
  }

  return (
    <div>
      <h2>전통주가 도대체 무엇인가요?</h2>
      <div>
        <ImageWithText info={info.first} />
      </div>
      <div>
        <ImageWithText info={info.second} />
      </div>
    </div>
  )
}

export default LandingSecond; 