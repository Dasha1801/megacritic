import styles from './cardCreateComment.module.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { sendComment } from '../../../server/api/comment';

const CardCreateComment = ({ setIsUpdate }) => {
  const [comment, setComment] = useState('');
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const { id } = useSelector(({ review }) => review);

  const getComment = (e) => {
    const { value } = e.target;
    setComment(value.trim());
  };

  const handlerBtn = () => {
    sendComment({ reviewId: id, text: comment });
    setIsUpdate(true);
    setComment('');
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
