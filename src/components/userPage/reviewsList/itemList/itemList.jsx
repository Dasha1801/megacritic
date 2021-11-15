import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaBan, FaEye, FaPencilAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../../redux/action';
import { deletePost } from '../../../../server/api';
import CardReview from '../../../../shared/cardReview/cardReview';
import UpdateItem from '../updateItem/updateItem';
import styles from './itemList.module.css';

const ItemList = ({ review }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const posts = useSelector(({ posts }) => posts);
  const dispatch = useDispatch();
  const { category, title, post } = review;
  const [popupReview, setPopupReview] = useState(false);
  const [popupUpdate, setPopupUpdate] = useState(false);
  const [popupDelete, setPopupDelete] = useState(false);
  const reviewClose = () => setPopupReview(false);
  const updateClose = () => setPopupUpdate(false);
  const deleteClose = () => setPopupDelete(false);

  const deleteItem = () => {
    deletePost(review);
    setPopupDelete(false);
    dispatch(getPosts(posts.filter((el) => el.id !== review.id)));
  };

  return (
    <tr>
      <td>{category}</td>
      <td>{title.slice(0, 22)}</td>
      <td className={styles.post}>
        <span>{post.slice(0, 55)}...</span>
        <span className={styles.icons}>
          <FaBan
            color="red"
            className={styles.icon}
            onClick={() => setPopupDelete(true)}
          />
          <FaEye
            color="#0d6efd"
            className={styles.icon}
            onClick={() => setPopupReview(true)}
          />
          <FaPencilAlt
            className={styles.icon}
            onClick={() => setPopupUpdate(true)}
          />
        </span>
      </td>
      <Modal show={popupReview} onHide={reviewClose}>
        <Modal.Body>
          <CardReview info={review} />
        </Modal.Body>
      </Modal>
      <Modal show={popupUpdate} onHide={updateClose}>
        <Modal.Body>
          <UpdateItem info={review} setPopupUpdate={setPopupUpdate} />
        </Modal.Body>
      </Modal>
      <Modal show={popupDelete} onHide={deleteClose}>
        <Modal.Body>
          <p>
            {langEn
              ? 'Do you really want to delete the review?'
              : 'Вы действительно хотите удалить обзор?'}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteClose}>
            {langEn ? 'Close' : 'Закрыть'}
          </Button>
          <Button variant="primary" onClick={deleteItem}>
            {langEn ? 'Delete' : 'Удалить'}
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

export default ItemList;
