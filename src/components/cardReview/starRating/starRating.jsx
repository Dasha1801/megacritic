import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const yellowStars = [...Array(rating)];
  const grayStarts = [...Array(10 - rating)];

  return (
    <div>
      {yellowStars.map((el) => {
        return <FaStar size={20} color="yellow" />;
      })}
      {grayStarts.map((el) => {
        return <FaStar size={20} color="gray" />;
      })}
    </div>
  );
};

export default StarRating;
