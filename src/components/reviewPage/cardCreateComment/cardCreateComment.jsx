import styles from './cardCreateComment.module.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { sendComment } from '../../../server/api/comment';

const CardCreateComment = ({ setIsUpdate }) => {
  const [comment, setComment] = useState('');
  const [showError, setShowError] = useState(false);
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const { id } = useSelector(({ review }) => review);

  const getComment = (e) => {
    setShowError(false);
    const { value } = e.target;
    setComment(value);
  };

  const addComment = () => {
    sendComment({ reviewId: id, text: comment.trim() });
    setIsUpdate(true);
    setComment('');
  };

  const handlerBtn = () => {
    comment.trim() ? addComment() : setShowError(true);
  };

  return (
    <Form className={styles.cardCreate}>
      <Form.Group className={styles.group}>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={getComment}
          placeholder={langEn ? 'Write your comment' : 'Оставь комментарий'}
        />
        <span style={{ color: 'red', fontSize: '12px' }}>
          {showError &&
            (langEn
              ? '***string cannot contain only spaces'
              : '***строка не может содержать только пробелы')}
        </span>
        {comment && (
          <Button
            variant="primary"
            className={styles.btnSend}
            onClick={handlerBtn}
          >
            {langEn ? 'Send' : 'Отправить'}
          </Button>
        )}
      </Form.Group>
    </Form>
  );
};

export default CardCreateComment;
