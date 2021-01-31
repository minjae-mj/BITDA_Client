import React, { useMemo } from 'react'; 
import StarIcon from '../atoms/StarIcon'; 

interface Props {
  index: number; 
  rating: number;
  hoverRating: number; 
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onSaveRating: (index: number) => void;
}

const RatingIcon = (props: Props) => {
  const { index, rating, hoverRating, onMouseEnter, onMouseLeave, onSaveRating,
  } = props;

  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return "#ffdb58"; 
    } else if (!hoverRating && rating >= index) {
      return "#ffdb58";
    }
    return "#dcdcdc";
  }, [rating, hoverRating, index]); 

  return (
    <div 
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}>
      <StarIcon fill={fill} />
    </div>
  )
}

export default RatingIcon; 