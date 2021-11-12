import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './tagInput.module.css';

const TagInput = ({ setTags }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const [tag, setTag] = useState('');
  const getTag = (e) => {
    const { value } = e.target;
    setTag(value);
  };

  const resetTag = () => {
    setTags((state) => [...state, tag]);
    setTag('');
  };

  return (
    <Form className={styles.formTag}>
      <FormControl
        className="me-2"
        type="text"
        placeholder={langEn ? 'Tag' : 'Тег'}
        onChange={getTag}
        value={tag}
      />
      <Button variant="secondary" onClick={resetTag}>
        {langEn ? 'Add' : 'Добавить'}
      </Button>
    </Form>
  );
};
export default TagInput;
