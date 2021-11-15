import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../redux/action';
import { getAllPost } from '../../../server/api';
import ItemList from './itemList/itemList';
import styles from './reviewsList.module.css';

const ReviewsList = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts);
  const { name } = useSelector(({ user }) => user);

  useEffect(() => {
    getAllPost().then((res) => {
      dispatch(getPosts(res));
    });
  }, [dispatch]);

  const myPosts = posts.filter((el) => el.name === name);
  return (
    <Table striped bordered hover className={styles.listReviews}>
      <thead>
        <tr>
          <th>{langEn ? 'Category' : 'Категория'}</th>
          <th>{langEn ? 'Title' : 'Заголовок'}</th>
          <th>{langEn ? 'Post' : 'Обзор'}</th>
        </tr>
      </thead>
      <tbody>
        {myPosts.length
          ? myPosts.map((review) => {
              return <ItemList review={review} key={review.id} />;
            })
          : null}
      </tbody>
    </Table>
  );
};

export default ReviewsList;
