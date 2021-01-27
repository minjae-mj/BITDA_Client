import React from 'react';
import DrinkListBtn from '../atoms/DrinkListBtn';
import TagWithBtn from '../molecules/TagWithBtn';
import styled from 'styled-components';

const StyleSelectContainer = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
`;

const StyleSelectContent = styled.div`
  width: 70%;
`;

const StyleSelectTitle = styled.span`
  font-size: 2rem;
  color: #43658b;
`;

interface Props {
  submitHandler: () => void;
  selectAllHandler: () => void;
}

const MainSelectSection = ({
  submitHandler,
  selectAllHandler,
}: Props): JSX.Element => {
  let typeButtonList = ['탁주/막걸리', '약주/청주', '과실주', '증류주'];
  let priceButtonList = [
    '1만원 이하',
    '1~2만원',
    '2~3만원',
    '3~4만원',
    '4만원 이상',
  ];
  let tasteButtonList = ['달콤함', '탄산감', '바디감', '고소함', '깔끔함'];
  let alcoholeButtonList = ['약한편', '있는편'];

  return (
    <StyleSelectContainer>
      <StyleSelectContent>
        <StyleSelectTitle>당신의 취향은?</StyleSelectTitle>
        <TagWithBtn
          title={'종류'}
          buttonList={typeButtonList}
          type={'category'}
        />
        <TagWithBtn
          title={'가격'}
          buttonList={priceButtonList}
          type={'price'}
        />
        <TagWithBtn title={'맛'} buttonList={tasteButtonList} type={'taste'} />
        <TagWithBtn
          title={'도수'}
          buttonList={alcoholeButtonList}
          type={'alcohol'}
        />
        <DrinkListBtn text={'취향 빚기'} submitHandler={submitHandler} />
        <DrinkListBtn text={'전체 보기'} submitHandler={selectAllHandler} />
      </StyleSelectContent>
    </StyleSelectContainer>
  );
};

export default MainSelectSection;
