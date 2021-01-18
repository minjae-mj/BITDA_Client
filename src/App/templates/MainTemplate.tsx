import React from 'react'; 
import MainDrinkList from '../organisms/MainDrinkList';
import MainSelectSection from '../organisms/MainSelectSection';
// import styled from 'styled-components'; 


const MainTemplate = (): JSX.Element => {

  return (
    <div>
      <MainSelectSection />
      <MainDrinkList />
    </div>
  )
}

export default MainTemplate; 