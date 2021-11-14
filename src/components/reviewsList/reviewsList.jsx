import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPost } from '../../server/api';
import ItemList from './itemList/itemList';
import styles from './reviewsList.module.css';

const ReviewsList = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const user = useSelector(({ user }) => user);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    getAllPost().then((res) => {
      setMyPosts(res.filter((el) => el.name === user.name));
    });
  });

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
          ? myPosts.map((info) => {
              return <ItemList info={info} key={info.id} />;
            })
          : null}
      </tbody>
    </Table>
  );
};

export default ReviewsList;
