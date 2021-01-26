import React from 'react'; 
import LandingBtn from '../atoms/LandingBtn'; 
import ImageWithText from '../molecules/ImageWithText';
import styled from 'styled-components';

interface Card {
  desc: string; 
  imgUrl: string; 
}


const StyledH2 = styled.h2`
  color : #43658B;
  text-align : center;
  margin-bottom : 64px;
  // &::after {
  //   width: 100%
  //   height: 2px
  //   border-bottom : 1px solid #43658B;
  // }
`;

const RowFlexBoxDiv = styled.div`
  display : flex;
  justify-content: space-between;
  margin-bottom : 40px;
`;
const ColumnFlexBox = styled.div`
  display : flex;
  flex-direction : column-reverse;
  padding : 40px 32px;
  border : 2px solid #FBC99D;
  border-radius : 4px;
  margin : 0px 48px;
`;


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
    <>
      <StyledH2>빚다에서 무엇을 할 수 있나요?</StyledH2>

      <RowFlexBoxDiv>
        {
        card.map(info => (
          <ColumnFlexBox key={info.desc}>
            <ImageWithText info={info} />
          </ColumnFlexBox>
        ))
        }
      </RowFlexBoxDiv>

      <LandingBtn text="전통주 보러가기" />
    </>
  )
}

export default LandingThird; 
