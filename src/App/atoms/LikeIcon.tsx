import React from 'react'; 
import { ReactComponent as LikeSvg } from '../../images/thumbs_up.svg';

interface Props {
  fill?: string
}

const LikeIcon = ({ fill = "#ED6663" }: Props) => {

  return (
   <>
     <LikeSvg fill={fill} />
   </>
  )
}

export default LikeIcon; 