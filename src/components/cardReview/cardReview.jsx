import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './cardReview.module.css';

const CardReview = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  return (
    <Form className={styles.review}>
      <Form.Group
        className={styles.headerReview}
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
          type="text"
          placeholder={langEn ? 'Title' : 'Заголовок обзора'}
        />
        <Form.Select aria-label="Floating label select example">
          <option>{langEn? "Select a category":"Выбери категорию"}</option>
          <option value="movies">{langEn? "Movies":"Кино"}</option>
          <option value="books">{langEn? "Books":"Книги"}</option>
          <option value="games">{langEn? "Games":"Игры"}</option>
        </Form.Select>
      </Form.Group>
      <Form.Group
        className={styles.text}
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={langEn? "Write your new review":"Напиши свой новый обзор"}
        />
        <Button variant="secondary" className={styles.submit}>
          {langEn? 'Add':'Добавить'}
        </Button>
      </Form.Group>
    </Form>
  );
};
export default CardReview;
