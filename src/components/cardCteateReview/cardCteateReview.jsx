import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DropZone from './dnd/dnd';
import styles from './cardReview.module.css';
import { useState } from 'react';
import Title from './titleReview/title';
import Category from './category/category';
import Review from './review/review';
import TagInput from './tagInput/tagInput';
import TagsList from './tagsList/tagsList';

const CardCreateReview = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [post, setPost] = useState('');
  const [tags, setTags] = useState([]);
  const [error, setError] = useState('');
  console.log(tags);

  const sendReview = () => {
    if (post && title && category) {
      console.table({
        title: title,
        category: category,
        post: post,
        image: image,
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
        <Title setTitle={setTitle} value={title} />
        <Review setPost={setPost} value={post} />
        {error && <span className={styles.error}>{error}</span>}
        {tags&& <TagsList tags={tags}/>}
        <Form.Group className={styles.dnd}>
          <DropZone setImage={setImage} value={image} />
          <Button
            variant="primary"
            className={styles.submit}
            onClick={sendReview}
          >
            {langEn ? 'Post' : 'Подать'}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
export default CardCreateReview;
