import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { updatePost } from '../../../../server/api/post';
import styles from '../../../../shared/cardCreateReview/cardCreateReview.module.css';
import Category from '../../../../shared/cardCreateReview/category/category';
import DropZone from '../../../../shared/cardCreateReview/dnd/dnd';
import Rating from '../../../../shared/cardCreateReview/rating/rating';
import Review from '../../../../shared/cardCreateReview/review/review';
import TagInput from '../../../../shared/cardCreateReview/tagInput/tagInput';
import TagsList from '../../../../shared/cardCreateReview/tagsList/tagsList';
import Title from '../../../../shared/cardCreateReview/titleReview/title';

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
    if (post && title && category && rating) {
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
