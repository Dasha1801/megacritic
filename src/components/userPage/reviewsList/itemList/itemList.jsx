import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaBan, FaEye, FaPencilAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPosts } from '../../../../redux/action';
import { deletePost } from '../../../../server/api/post';
import UpdateItem from '../updateItem/updateItem';
import styles from './itemList.module.css';

const ItemList = ({ review }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const posts = useSelector(({ posts }) => posts);
  const dispatch = useDispatch();
  const { category, title, post } = review;
  const [popupUpdate, setPopupUpdate] = useState(false);
  const [popupDelete, setPopupDelete] = useState(false);
  const updateClose = () => setPopupUpdate(false);
  const deleteClose = () => setPopupDelete(false);

  const deleteItem = () => {
    deletePost(review);
    setPopupDelete(false);
    dispatch(getPosts(posts.filter((el) => el.id !== review.id)));
  };

  const showReview = () => {
    window.localStorage.setItem('review', JSON.stringify(review));
  };

  return (
    <tr>
      <td>{category}</td>
      <td>{title.slice(0, 22)}</td>
      <td className={styles.post}>
        <ReactMarkdown children={post.slice(0, 55)} />
        <span className={styles.icons}>
          <FaBan
            color="#d12c1f"
            className={styles.icon}
            onClick={() => setPopupDelete(true)}
          />
          <NavLink exact to="/review">
            <FaEye
              color="#0d6efd"
              className={styles.iconEye}
              onClick={showReview}
            />
          </NavLink>
          <FaPencilAlt
            className={styles.icon}
            onClick={() => setPopupUpdate(true)}
          />
        </span>
      </td>
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
