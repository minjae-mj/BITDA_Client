import React from 'react'; 
import styled from 'styled-components';
import LandingFirstInfo from '../molecules/LandingFirstInfo'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import first from '../../images/first.png'
import second from '../../images/second.png'
import third from '../../images/third.png'



const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none; 
      width : 100%;
      height : 50%;
      // position : absolute;
      position : relative;
      margin : 0px;
    }
`;
const StyledImg = styled.img`
  max-width:100%;
  max-height:50%;

`;


const LandingFirst = (): JSX.Element => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 2500,
    pauseOnHover : false,
    adaptiveHeight : true,
    // centerMode: true,
    // fade : true,
  };

  return (
    <>
      <StyledSlider {...settings}>

        <div>
          <StyledImg src={first} alt='first'></StyledImg>
        </div>

        <div>
          <StyledImg src={second} alt='second'></StyledImg>
        </div>

        <div>
          <StyledImg src={third} alt='third'></StyledImg>
        </div>

      </StyledSlider>      
      <LandingFirstInfo />
    </>
  )
}

export default LandingFirst; 