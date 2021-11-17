import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './category.module.css';

const Category = ({ setCategory, value }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);

  const getCategory = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  return (
    <Form.Select
      aria-label="Floating label select example"
      onChange={getCategory}
      value={value}
      className={styles.category}
    >
      <option value="">{langEn ? 'Category' : 'Категория'}</option>
      <option value="movies">{langEn ? 'Movies' : 'Кино'}</option>
      <option value="books">{langEn ? 'Books' : 'Книги'}</option>
      <option value="games">{langEn ? 'Games' : 'Игры'}</option>
    </Form.Select>
  );
};

export default Category;
