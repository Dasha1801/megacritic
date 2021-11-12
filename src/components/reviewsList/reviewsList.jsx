import { Table } from 'react-bootstrap';
import ItemList from './itemList/itemList';
import { mockReview } from '../../mock';
import styles from './reviewsList.module.css';
import { useSelector } from 'react-redux';

const ReviewsList = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);

  return (
    <Table striped bordered hover className={styles.listReviews}>
      <thead>
        <tr>
          <th>{langEn? 'Category': 'Категория'}</th>
          <th>{langEn? 'Title': 'Заголовок'}</th>
          <th>{langEn? 'Post': 'Обзор'}</th>
        </tr>
      </thead>
      <tbody>
        {mockReview.map((info) => {
          return <ItemList info={info}/>;
        })}
      </tbody>
    </Table>
  );
};

export default ReviewsList;
