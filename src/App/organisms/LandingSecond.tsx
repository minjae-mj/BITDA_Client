import React from 'react';
import styled from 'styled-components';
import ImageWithText from '../molecules/ImageWithText';
import mapImg from '../../images/mapImg.png';
import findyourtaste from '../../images/findyourtaste.png';

interface Info {
  first: {
    desc: string;
    desc2: string;
    imgUrl: string;
  };
  second: {
    desc: string;
    desc2: string;
    imgUrl: string;
  };
}

const StyledH2 = styled.h2`
  color: #43658b;
  text-align: center;
  margin-bottom: 64px;
  font-family: 'Nanum Pen Script', cursive;
  font-size: 5rem;

  @media screen and (max-width: 546px) {
    font-size: 3.8rem;
    margin-bottom: 24px;
  }
`;

const FlexBoxDiv = styled.div`
  display: flex;
  margin-bottom: 8rem;
  padding-left: 40px;

  @media screen and (max-width: 935px) {
    display: flex;
    flex-direction: column-reverse;
    padding-left: 0px;
  }
`;
const ReversedFlexBoxDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media screen and (max-width: 935px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const LandingSecond = (): JSX.Element => {
  const info: Info = {
    first: {
      desc: ` 
      아직도 '전통주'하면 막걸리만 생각하시나요? 
      사실, 우리나라 양조장 1200여개에서 만드는 전통주만 1163종에 달합니다.
      전통주에는 지역의 역사와 문화, 낭만이 담겨 있다는 사실! 
      `,
      desc2: `특별한 날에 함께하기 좋은 전통주.
      하지만 어디서부터 어떻게 골라야 할지 몰라서 망설이셨나요? `,
      imgUrl: mapImg,
    },
    second: {
      desc: `아직도 전통주가 생소하다면?`,
      desc2: `'빚다'에서 당신도 몰랐던 전통주 취향을 발견하세요!
        새로운 취향, 아니 어쩌면 그 이상의 것들을 찾아가실지도 몰라요. 
        여러분의 즐거운 전통주 탐구생활에 빚다가 함께하겠습니다! 
      `,

      imgUrl: findyourtaste,
    },
  };

  return (
    <div>
      <StyledH2> 1000가지의 전통주를 전부 마시기엔 인생이 너무 짧다! </StyledH2>
      <FlexBoxDiv className="up-on-scroll">
        <ImageWithText info={info.first} />
      </FlexBoxDiv>
      <ReversedFlexBoxDiv className="up-on-scroll">
        <ImageWithText info={info.second} />
      </ReversedFlexBoxDiv>
    </div>
  );
};

export default LandingSecond;
