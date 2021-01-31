import React from 'react';
import styled from 'styled-components';
import LandingFirstInfo from '../molecules/LandingFirstInfo';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import first from '../../images/배너13.jpg';
import second from '../../images/배너11.jpg';
import third from '../../images/민재님거2.jpg';

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
    width: 100%;
    height: 30%;
    position: relative;
    margin: 0px;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 85rem;
  opacity: 0.8;
  filter: contrast(1.35) brightness(80%);
`;


const LandingFirst = (): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    adaptiveHeight: true,
  };

  return (
    <>
      <StyledSlider {...settings}>
        <div>
          <StyledImg src={first} alt="first"></StyledImg>
        </div>

        <div>
          <StyledImg src={second} alt="second"></StyledImg>
        </div>

        <div>
          <StyledImg src={third} alt="third"></StyledImg>
        </div>
      </StyledSlider>
      <LandingFirstInfo />
    </>
  );
};

export default LandingFirst;
