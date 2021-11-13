import { Form, Button } from 'react-bootstrap';
import Category from '../../cardCreateReview/category/category';
import DropZone from '../../cardCreateReview/dnd/dnd';
import Rating from '../../cardCreateReview/rating/rating';
import Review from '../../cardCreateReview/review/review';
import TagInput from '../../cardCreateReview/tagInput/tagInput';
import Title from '../../cardCreateReview/titleReview/title';
import styles from '../../cardCreateReview/cardCreateReview.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import TagsList from '../../cardCreateReview/tagsList/tagsList';
import { updatePost } from '../../../server/api';


const UpdateItem = ({ info, setPopupUpdate }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const [image, setImage] = useState(info.image);
  const [title, setTitle] = useState(info.title);
  const [category, setCategory] = useState(info.category);
  const [post, setPost] = useState(info.post);
  const [tags, setTags] = useState(info.tags);
  const [rating, setRating] = useState(info.rating);
  const [error, setError] = useState('');

  const sendReview = () => {
    if (post && title && category) {
      updatePost({
        id: info.id,
        title: title,
        category: category,
        post: post,
        image: image,
        rating: rating,
        tags: tags,
      });

      setPopupUpdate(false);
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
            {langEn ? 'Update' : 'Обновить'}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default UpdateItem;
