import React from 'react'; 
import { ReactComponent as StarSvg } from '../../images/review_star_full.svg';

interface Props {
  fill: string
}

const StarIcon = ({ fill = "#dcdcdc" }: Props) => {

  return (
  <div>
    <StarSvg style={{ marginRight: '3px' }}fill={fill} />
  </div>
  )
}

export default StarIcon; 