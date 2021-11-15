import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './rating.module.css';

const Rating = ({ setRating, value }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const getRating = (e) => {
    const { value } = e.target;
    setRating(value);
  };

  return (
    <Form.Select
      aria-label="Floating label select example"
      onChange={getRating}
      value={value}
      className={styles.rating}
    >
      <option value="">{langEn ? 'Rating' : 'Рейтинг'}</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </Form.Select>
  );
};

export default Rating;
