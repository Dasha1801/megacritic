import styles from './cardReview.module.css';
import { Card } from 'react-bootstrap';
import StarRating from './starRating/starRating';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegThumbsDown } from 'react-icons/fa';
import TagsList from '../cardCreateReview/tagsList/tagsList';
import ReactMarkdown from 'react-markdown';

const CardReview = ({ info }) => {
  const { image, post, rating, title, category, tags } = info;

  return (
    <Card className={styles.card}>
      <Card.Header className={styles.headerCard}>
        <h5>{category}</h5>
        <StarRating rating={rating} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <ReactMarkdown children={post} />
        </Card.Text>
        {image.length &&
          image.map((el, index) => {
            return (
              <Card.Img
                variant="top"
                src={el}
                className={styles.img}
                key={index}
              />
            );
          })}
        <TagsList tags={tags} />
      </Card.Body>
      <Card.Footer className={styles.likes}>
        <FaRegThumbsDown size={30} />
        <FaRegThumbsUp size={30} />
      </Card.Footer>
    </Card>
  );
};
export default CardReview;