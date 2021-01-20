import React from 'react'; 
import { ReactComponent as StarSvg } from '../../images/review_star_full.svg';

interface Props {
  fill: string
}

const StarIcon = ({ fill = "#C0C0C0" }: Props) => {

  return (
   <div>
     <StarSvg fill={fill} />
   </div>
  )
}

export default StarIcon; 