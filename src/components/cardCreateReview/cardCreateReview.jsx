import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DropZone from './dnd/dnd';
import styles from './cardCreateReview.module.css';
import { useState } from 'react';
import Title from './titleReview/title';
import Category from './category/category';
import Review from './review/review';
import TagInput from './tagInput/tagInput';
import TagsList from './tagsList/tagsList';
import Rating from './rating/rating';
import { auth } from '../../configAuth/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { sendPost } from '../../server/api';

const CardCreateReview = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const [user] = useAuthState(auth);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [post, setPost] = useState('');
  const [tags, setTags] = useState([]);
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const sendReview = () => {
    if (post && title && category) {
      sendPost({
        name: user.displayName,
        title: title,
        category: category,
        post: post,
        image: image,
        rating: rating,
        tags: tags,
        thumbsUp: 0,
        thumbsDown: 0,
      });
      reset();
    } else {
      setError(
        langEn
          ? '*** error. Fill in the fields'
          : '*** ошибка. Заполните все поля!'
      );
    }
  };

  const reset = () => {
    setImage([]);
    setTitle('');
    setCategory('');
    setPost('');
    setError('');
    setRating('');
    setTags([]);
  };

  return (
    <>
      <Form className={styles.cardReview}>
        <Form.Group
          className={styles.headerReview}
          controlId="exampleForm.ControlInput1"
        >
          <Category setCategory={setCategory} value={category} />
          <TagInput setTags={setTags} />
        </Form.Group>
        <Form.Group
          className={styles.wrapperTitleRating}
          controlId="exampleForm.ControlInput1"
        >
          <Title setTitle={setTitle} value={title} />
          <Rating setRating={setRating} value={rating} />
        </Form.Group>

        <Review setPost={setPost} value={post} />
        {error && <span className={styles.error}>{error}</span>}
        {tags && <TagsList tags={tags} />}
        <Form.Group className={styles.dnd}>
          <DropZone setImage={setImage} value={image} />
          <Button
            variant="primary"
            className={styles.submit}
            onClick={sendReview}
          >
            {langEn ? 'Post' : 'Отправить'}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
export default CardCreateReview;