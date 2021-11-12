import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './review.module.css';


const Review = ({ setPost, value }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);

  const getPost = (e) => {
    const { value } = e.target;
    setPost(value);
  };

  return (
    <Form.Control
      as="textarea"
      rows={3}
      placeholder={langEn ? 'Write your new review' : 'Напиши свой новый обзор'}
      onChange={getPost}
      value={value}
      className={styles.review}
    />
  );
};

export default Review;
