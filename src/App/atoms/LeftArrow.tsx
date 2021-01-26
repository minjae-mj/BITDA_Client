import React from 'react'; 
import { ReactComponent as LeftArrowSvg } from '../../images/left-arrow.svg'

interface Props {
  fill?: string
  handleClick?: () => void; 
}

const LeftArrow = ({ fill = "#ED6663", handleClick }: Props) => {

  return (
   <>
     <LeftArrowSvg onClick={handleClick} fill={fill} />
   </>
  )
}

export default LeftArrow; 