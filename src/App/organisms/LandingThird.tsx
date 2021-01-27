import React from 'react'; 
import LandingBtn from '../atoms/LandingBtn'; 
import ImageWithText from '../molecules/ImageWithText';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import filterImg from '../../images/filter.png'
import cartImg from '../../images/cart.png'
import likeImg from '../../images/likes.png'

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
  @media screen and (max-width: 546px){
    flex-direction : column;
  }
`;
const ColumnFlexBox = styled.div`
  display : flex;
  flex-direction : column-reverse;
  padding : 16px 16px;
  background :#BADCF6;
  border : 1px solid #BADCF6;
  border-radius : 8px;
  margin : 0px 48px;

  @media screen and (max-width: 768px){
    margin : 0px 8px;
  }
  @media screen and (max-width: 546px){
    margin : 6px 0px;
  }
`;


const LandingThird = (): JSX.Element => {

  const card: Card[] = [
    {
      desc: '취향기반 전통주 추천',
      imgUrl: filterImg,

    },
    {
      desc: '마음에 든 전통주 찜',
      imgUrl: likeImg,

    },
    {
      desc: '전통주 사러 바로 가기',
      imgUrl: cartImg,

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

      <Link to="/drinks/list">
        <LandingBtn text="전통주 보러가기" />
      </Link>
    </>
  )
}

export default LandingThird; 
