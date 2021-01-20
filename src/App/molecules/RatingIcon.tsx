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
      return "yellow"; 
    } else if (!hoverRating && rating >= index) {
      return "yellow";
    }
    return "#C0C0C0";
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