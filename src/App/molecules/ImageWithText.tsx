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



  @media screen and (max-width: 1200px) {
    width: ${(props: any) => props.width || '30rem'};
    height: ${(props: any) => props.height || '40rem'};

    display : flex;
    justify-content : center;
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
  return (
    <>
      <StyledDiv>
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
        />
      </StyledPictureDiv>
    </>
  );
};

export default ImageWithText;
