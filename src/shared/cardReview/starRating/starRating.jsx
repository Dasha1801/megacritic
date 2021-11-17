import { useCallback, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './starRating.module.css';

const StarRating = ({ rating }) => {
  const [newRating, setNewRating] = useState(null);
  const [hover, setHover] = useState(null);
  const stars = [...Array(10)];

  const updateRating = useCallback(() => {
    console.log(rating, newRating);
    console.log((rating + newRating) / 2);
    return (rating + newRating) / 2;
  },[newRating, rating]);

  useEffect(() => {
    if (newRating) {
      updateRating();
    }
  }, [newRating, updateRating]);

  return (
    <div>
      {stars.map((star, idx) => {
        const ratingValue = idx + 1;
        return (
          <label>
            <input
              type="radio"
              className={styles.starInput}
              value={ratingValue}
              onClick={() => setNewRating(ratingValue)}
              disabled={newRating}
            />
            <FaStar
              size={20}
              key={idx}
              className={styles.star}
              color={ratingValue <= (newRating || hover) ? 'yellow' : 'gray'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
