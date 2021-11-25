import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { sendRating } from '../../../server/api/rating';
import { getInfoUser } from '../../../utils';
import styles from './starRating.module.css';

const StarRating = ({ reviewId }) => {
  const [newRating, setNewRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [id, setId] = useState('');
  const stars = [...Array(10)];
  
  useEffect(() => {
    const user = getInfoUser();
    if (user) {
      setId(user.id);
    }
  }, []);

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
