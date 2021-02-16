import React from 'react'; 
import { ReactComponent as LeftArrowSvg } from '../../images/left_arrow.svg'

interface Props {
  fill?: string
  handleClick?: () => void; 
}

const LeftArrow = ({ fill = "#ED6663", handleClick }: Props) => {

  return (
   <>
     <LeftArrowSvg style={{ marginRight: '8px' }} onClick={handleClick} fill={fill} />
   </>
  )
}

export default LeftArrow; 