import { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';
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
    if (tag.trim()) {
      setTags((state) => [...state, tag]);
      setTag('');
    }
  };

  return (
    <div className={styles.formTag}>
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
    </div>
  );
};
export default TagInput;
