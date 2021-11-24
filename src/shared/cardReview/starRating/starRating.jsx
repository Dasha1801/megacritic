import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { sendRating } from '../../../server/api/rating';
import styles from './starRating.module.css';

const StarRating = ({ reviewId }) => {
  const { id } = useSelector(({ user }) => user);

  const [newRating, setNewRating] = useState(null);
  const [hover, setHover] = useState(null);
  const stars = [...Array(10)];

  useEffect(() => {
    if (newRating) {
      sendRating({ rating: newRating, uid: id, reviewId: reviewId });
    }
  }, [newRating, id, reviewId]);

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
