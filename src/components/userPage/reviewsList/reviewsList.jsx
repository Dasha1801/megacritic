import { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../redux/action';
import { getAllMyPost } from '../../../server/api';
import { filter, sort } from '../../../utils';
import ItemList from './itemList/itemList';
import styles from './reviewsList.module.css';

const ReviewsList = () => {
  const posts = useSelector(({ posts }) => posts);
  const [myPosts, setMyPosts] = useState([]);
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const { name } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllMyPost(name).then((res) => {
      dispatch(getPosts(res));
      setMyPosts(res);
    });
  }, [name, dispatch, posts.length]);

  const filterCategory = (e) => {
    const { value } = e.target;
    filter(value, posts, setMyPosts);
  };
  const sortRating = (e) => {
    const { value } = e.target;
    sort(value, myPosts, setMyPosts);
  };

  return (
    <>
      <Form className={styles.wrapperSort}>
        <Form.Select
          aria-label="Floating label select example"
          className={styles.sort}
          onChange={filterCategory}
        >
          <option value="">
            {langEn ? 'Sorting by categories' : 'По категориям'}
          </option>
          <option value="movies">{langEn ? 'Movies' : 'Кино'}</option>
          <option value="books">{langEn ? 'Books' : 'Книги'}</option>
          <option value="games">{langEn ? 'Games' : 'Игры'}</option>
        </Form.Select>
        <Form.Select
          aria-label="Floating label select example"
          className={styles.sort}
          onChange={sortRating}
        >
          <option value="">{langEn ? 'By Rating' : 'По рейтенгу'}</option>
          <option value="inc">
            {langEn ? 'by increasing' : 'По возрастанию'}
          </option>
          <option value="desc">
            {langEn ? 'in descending' : 'По убыванию'}
          </option>
        </Form.Select>
      </Form>
      <Table striped bordered hover className={styles.listReviews}>
        <thead>
          <tr>
            <th>{langEn ? 'Category' : 'Категория'}</th>
            <th>{langEn ? 'Title' : 'Заголовок'}</th>
            <th>{langEn ? 'Post' : 'Обзор'}</th>
          </tr>
        </thead>
        <tbody>
          {myPosts.map((review) => {
            return <ItemList review={review} key={review.id} />;
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ReviewsList;
