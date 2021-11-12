import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaBan } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import styles from './itemList.module.css';
import CardReview from '../../cardReview/cardReview';
import UpdateItem from '../updateItem/updateItem';

const ItemList = ({ info }) => {
  const { category, title, post } = info;
  const [popupReview, setPopupReview] = useState(false);
  const [popupUpdate, setPopupUpdate] = useState(false);
  const reviewClose = () => setPopupReview(false);
  const updateClose = () => setPopupUpdate(false);
  
  return (
    <tr>
      <td>{category}</td>
      <td>{title.slice(0, 22)}</td>
      <td className={styles.post}>
        <span>{post.slice(0, 55)}...</span>
        <span className={styles.icons}>
          <FaBan color="red" className={styles.icon} />
          <FaEye
            color="#0d6efd"
            className={styles.icon}
            onClick={() => setPopupReview(true)}
          />
          <FaPencilAlt className={styles.icon}  onClick={() => setPopupUpdate(true)}/>
        </span>
      </td>
      <Modal show={popupReview} onHide={reviewClose}>
        <Modal.Body>
          <CardReview info={info} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={reviewClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={popupUpdate} onHide={updateClose}>
        <Modal.Body>
          <UpdateItem info={info} setPopupUpdate={setPopupUpdate}/>
        </Modal.Body>
      </Modal>
    </tr>
  );
};

export default ItemList;
