import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getResult } from '../../../../server/api/search';

const SearchForm = ({ props }) => {
  const { setSearchRes, setShowPopup } = props;
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const [word, setWord] = useState('');

  const handleButton = async () => {
    if (word.trim()) {
      const res = await getResult({ term: word });
      setSearchRes(res);
      setWord('');
      setShowPopup(true);
    }
  };

  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        className="me-2"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <Button variant="primary" onClick={handleButton}>
        {langEn ? 'Search' : 'Поиск'}
      </Button>
    </Form>
  );
};

export default SearchForm;
