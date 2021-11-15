import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const yellowStars = [...Array(rating)];
  const grayStarts = [...Array(10 - rating)];

  return (
    <div>
      {yellowStars.map((el, index) => {
        return <FaStar size={20} color="yellow" key={index}/>;
      })}
      {grayStarts.map((el, index) => {
        return <FaStar size={20} color="gray" key={index}/>;
      })}
    </div>
  );
};

export default StarRating;
