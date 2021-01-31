import React from 'react';
import LandingBtn from '../atoms/LandingBtn';
import ImageWithText from '../molecules/ImageWithText';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import filterImg from '../../images/filter.png';
import cartImg from '../../images/cart.png';
import likeImg from '../../images/likes.png';

interface Card {
  desc: string;
  imgUrl: string;
}

const StyledH2 = styled.h2`
  color: #43658b;
  text-align: center;
  margin-bottom: 6.4rem;
  padding-top: 10rem;
  font-family: 'Nanum Pen Script', cursive;
  font-size: 5rem;
  @media screen and (max-width: 546px) {
    padding-top: 5rem;
    margin-bottom: 3.2rem;
    font-size: 3.8rem;
  }
`;

const RowFlexBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Nanum Pen Script', cursive;
  margin-bottom: 40px;
  transition: transform 0.7s, opacity 1s;
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
  @media screen and (max-width: 546px) {
    flex-direction: column;
  }
`;
const ColumnFlexBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 16px 0px;
  background: #badcf6;
  border: 1px solid #badcf6;
  border-radius: 8px;
  margin: 0px 40px;
  width: 30rem;

  @media screen and (max-width: 1200px) {
    margin: 0px 16px;
  }
  @media screen and (max-width: 1000px) {
    margin: 0px 8px;
    width: 25rem;
  }

  @media screen and (max-width: 820px) {
    margin: 0px 8px;
    width: 20rem;
  }

  @media screen and (max-width: 546px) {
    margin: 6px 0px;
    width: 25rem;
  }
`;

const LandingThird = (): JSX.Element => {
  const card: Card[] = [
    {
      desc: '취향기반 전통주 추천',
      imgUrl: filterImg,
    },
    {
      desc: '마음에 드는 전통주 찜',
      imgUrl: likeImg,
    },
    {
      desc: '전통주 사러 가기',
      imgUrl: cartImg,
    },
  ];

  const styleImg = {
    width: '14rem',
    height: '15rem',
    size: '2.8rem',
    lineHeight: 1.6,
  };

  const isElementUnderBottom = (elem: any, triggerDiff: any) => {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  };

  const handleScroll = () => {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach((elem: any) => {
      if (isElementUnderBottom(elem, -200)) {
        elem.style.opacity = '0';
        elem.style.transform = 'translateY(100px)';
      } else {
        elem.style.opacity = '1';
        elem.style.transform = 'translateY(0px)';
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <StyledH2>빚다에서 무엇을 할 수 있나요?</StyledH2>

      <RowFlexBoxDiv className="up-on-scroll">
        {card.map((info) => (
          <ColumnFlexBox key={info.desc}>
            <ImageWithText info={info} css={styleImg} />
          </ColumnFlexBox>
        ))}
      </RowFlexBoxDiv>

      <Link to="/drinks/list">
        <LandingBtn text="전통주 보러가기" />
      </Link>
    </>
  );
};

export default LandingThird;
