import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Title = ({ setTitle, value }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);

  const getTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <Form.Control
      type="text"
      placeholder={langEn ? 'Title' : 'Заголовок обзора'}
      onChange={getTitle}
      value={value}
    />
  );
};

export default Title;
