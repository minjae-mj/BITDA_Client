import React from 'react';
import styled from 'styled-components';

interface ImageWithTextProps {
  info: {
    desc: string;
    desc2?: string;
    imgUrl: any;
  };
  css?: {
    height?: string;
    width?: string;
    size?: any;
    lineHeight?: number;
  };
}

interface CssProps {
  height?: string;
  width?: string;
  size?: string;
  lineHeight?: number;
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1.2;
  flex-direction: column;
  flex-basis: 50%;
  padding: 16px 16px;
  transition: transform 0.7s, opacity 1s;
`;
const StyledPictureDiv = styled.div`
  flex-basis: 50%;
  height: 100%;
  width: 100%;
  padding: 16px 16px;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: ${(props: any) => props.width || '50rem'};
  height: ${(props: any) => props.height || '60rem'};
  transition: transform 0.7s, opacity 1s;
  @media screen and (max-width: 1200px) {
    width: ${(props: any) => props.width || '30rem'};
    height: ${(props: any) => props.height || '40rem'};

    display: flex;
    justify-content: center;
  }
`;
const StyledP = styled.p`
  color: #58595b;
  font-size: ${(props: CssProps) => props.size || '2.2rem'};
  padding: 0rem 2.4rem;
  margin-bottom: 2rem;
  font-weight: 700;

  line-height: ${(props: CssProps) => props.lineHeight || 2};
  @media screen and (max-width: 546px) {
    font-size: 1.8rem;
  }
`;

const ImageWithText = ({ info, css }: ImageWithTextProps): JSX.Element => {
  const isElementUnderBottom = (elem: any, triggerDiff: any) => {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  };

  const handleScroll = () => {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach((elem: any) => {
      if (isElementUnderBottom(elem, -20)) {
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
      <StyledDiv className="up-on-scroll">
        <StyledP size={css?.size} lineHeight={css?.lineHeight}>
          {info.desc}
        </StyledP>
        {info.desc2 && <StyledP>{info.desc2}</StyledP>}
      </StyledDiv>
      <StyledPictureDiv>
        <StyledImage
          src={info.imgUrl}
          alt="imgs"
          height={css?.height}
          width={css?.width}
          className="up-on-scroll"
        />
      </StyledPictureDiv>
    </>
  );
};

export default ImageWithText;
