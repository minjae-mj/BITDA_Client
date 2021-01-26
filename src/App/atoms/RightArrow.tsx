import React from 'react'; 
import { ReactComponent as RightArrowSvg } from '../../images/right_arrow.svg'; 

interface Props {
  fill?: string;
  handleClick?: () => void; 
}

const RightArrow = ({ fill = "#ED6663", handleClick }: Props) => {

  return (
   <>
     <RightArrowSvg onClick={handleClick} fill={fill} />
   </>
  )
}

export default RightArrow; 