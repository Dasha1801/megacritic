import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { sendPost } from '../../server/api';
import styles from './cardCreateReview.module.css';
import Category from './category/category';
import DropZone from './dnd/dnd';
import Rating from './rating/rating';
import Review from './review/review';
import TagInput from './tagInput/tagInput';
import TagsList from './tagsList/tagsList';
import Title from './titleReview/title';


const CardCreateReview = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const user = useSelector(({ user }) => user);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [post, setPost] = useState('');
  const [tags, setTags] = useState([]);
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const sendReview = () => {
    if (post && title && category && rating) {
      sendPost({
        name: user.name,
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
