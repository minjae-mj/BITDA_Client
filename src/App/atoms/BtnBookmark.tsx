import React from 'react'; 
import styled from 'styled-components'; 

type BtnBookmarkProps = {
  text: string;   
  value?: string; 
  handleSubmit?: (e: any) => void; 
  handleClick?: (e: any) => void;
}

export const StyleBtnBookmark = styled.button`
  color: #4E89AE; 
  background-color: var(--color-white); 
  border: 1px solid var(--color-secondary); 
  border-radius: 5px; 
  font-size: 1.5rem; 
  height: 4rem;
  padding: 5px 8px; 
  margin: 0 3px; 
  width: 40%; 
  
  &:hover {
    color: #43658B; 
  }

  &:focus {
    color: #43658B
  }
` 

export const StyleBtnBookmarkReverse = styled(StyleBtnBookmark)`
  color: var(--color-white); 
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary); 
` 

const BtnBookmark = ({ text, value = "", handleClick, handleSubmit }: BtnBookmarkProps ) => {

  return (
    <StyleBtnBookmark value={value} onClick={handleClick || handleSubmit}>{text}</StyleBtnBookmark>
  )
}

export default BtnBookmark; 