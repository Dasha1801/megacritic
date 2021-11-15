import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FaBan, FaEye, FaPencilAlt } from 'react-icons/fa';
import { deletePost } from '../../../server/api';
import CardReview from '../../cardReview/cardReview';
import UpdateItem from '../updateItem/updateItem';
import styles from './itemList.module.css';

const ItemList = ({ review }) => {
  const { category, title, post } = review;
  const [popupReview, setPopupReview] = useState(false);
  const [popupUpdate, setPopupUpdate] = useState(false);
  const reviewClose = () => setPopupReview(false);
  const updateClose = () => setPopupUpdate(false);

  const deleteItem = () => {
    deletePost(review);
  };

  return (
    <tr>
      <td>{category}</td>
      <td>{title.slice(0, 22)}</td>
      <td className={styles.post}>
        <span>{post.slice(0, 55)}...</span>
        <span className={styles.icons}>
          <FaBan color="red" className={styles.icon} onClick={deleteItem} />
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
          <UpdateItem info={review} setPopupUpdate={setPopupUpdate}/>
        </Modal.Body>
      </Modal>
    </tr>
  );
};

export default ItemList;
