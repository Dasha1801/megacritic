import styles from './cardReview.module.css';
import { mockReview } from '../../mock';
import { Card } from 'react-bootstrap';
import StarRating from './starRating/starRating';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegThumbsDown } from 'react-icons/fa';

const CardReview = () => {
  const { image, post, rating, title } = mockReview;
  
  return (
    <Card className="text-center">
      <Card.Header>
        <StarRating rating={rating} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{post}</Card.Text>
        {image.length &&
          image.map((el) => {
            return <Card.Img variant="top" src={el} className={styles.img} />;
          })}
      </Card.Body>
      <Card.Footer className={styles.likes}>
        <FaRegThumbsDown size={40} />
        <FaRegThumbsUp size={40} />
      </Card.Footer>
    </Card>
  );
};
export default CardReview;
