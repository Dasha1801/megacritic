import { Card } from 'react-bootstrap';
import styles from './cardComment.module.css';

const CardComment = ({ comment }) => {
  const { text, createdAt } = comment;
  return (
    <Card className={styles.cardComment}>
      <Card.Header>{createdAt}</Card.Header>
      <Card.Body>{text}</Card.Body>
    </Card>
  );
};

export default CardComment;

