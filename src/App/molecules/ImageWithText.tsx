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
  //align-items: center;
  line-height: 1.6;
  flex-direction: column;
  flex-basis: 50%;
  padding: 16px 16px;
  // border : 1px solid red;
`;
const StyledPictureDiv = styled.div`
  flex-basis: 50%;
  height: 100%;
  width: 100%;
  padding: 16px 16px;
  display: flex;
  justify-content: center;
  // border : 1px solid red;
`;

const StyledImage = styled.img`
  width: ${(props: any) => props.width || '50rem'};
  height: ${(props: any) => props.height || '60rem'};
`;
const StyledP = styled.p`
  color: #58595b;
  font-size: ${(props: CssProps) => props.size || '2.2rem'};
  padding: 0rem 3rem;
  margin-bottom: 2rem;
  //text-align: center;
  font-weight: 700;
  line-height: ${(props: CssProps) => props.lineHeight || 2};
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
