import React from 'react';
import DrinkListBtn from '../atoms/DrinkListBtn';
import TagWithBtn from '../molecules/TagWithBtn';
import styled from 'styled-components';
import test1 from '../../images/background.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
const StyleSelectContainer = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  background-color: #fdf4f4;
  background: url(${test1}) no-repeat;
  background-size: 100% 100%;
`;

const StyleSelectTitle = styled.div`
  padding-bottom: 1rem;
  margin: 2rem 0;
  font-size: 2.3rem;
  color: var(--color-primary);
  font-weight: bold;
  border-bottom: solid 1px lightgray;
  @media screen and (max-width: 1440px) {
    font-size: 2rem;
  }
`;

const StyleSelectContent = styled.div`
  width: 70%;
`;

const StyleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyleButtonArea = styled.div`
  width: 100%;
  position: relative;
  left: 24%;
  @media screen and (max-width: 1500px) {
    left: 15%;
  }
  @media screen and (max-width: 1440px) {
    left: 18%;
  }
`;

const StyledSubmitBtnArea = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
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
  const accessToken = localStorage.getItem('accessToken');
  const state = useSelector(
    (state: RootState) => state.signinReducer.user.userName
  );
  return (
    <StyleSelectContainer>
      <StyleSelectContent>
        <StyleSelectTitle>
          {accessToken ? `${state}님` : `여러분`}의 취향을 선택해주세요!
        </StyleSelectTitle>
        <StyleDiv>
          <StyleButtonArea>
            <TagWithBtn
              title={'어떤 종류의 술을 선호하시나요?'}
              buttonList={typeButtonList}
              type={'category'}
            />
            <TagWithBtn
              title={'평소 내가 좋아하는 맛은?'}
              buttonList={tasteButtonList}
              type={'taste'}
            />
            <TagWithBtn
              title={'희망하시는 가격대는 어떤가요?'}
              buttonList={priceButtonList}
              type={'price'}
            />
            <TagWithBtn
              title={'도수 취향은 어떤가요?'}
              buttonList={alcoholeButtonList}
              type={'alcohol'}
            />
          </StyleButtonArea>
          <StyledSubmitBtnArea>
            <DrinkListBtn text={'취향 빚기'} submitHandler={submitHandler} />
            <DrinkListBtn text={'전체 보기'} submitHandler={selectAllHandler} />
          </StyledSubmitBtnArea>
        </StyleDiv>
      </StyleSelectContent>
    </StyleSelectContainer>
  );
};

export default MainSelectSection;
