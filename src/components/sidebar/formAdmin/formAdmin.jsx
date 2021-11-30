import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { validationAdmin } from '../../../redux/action';
import { useNavigate } from 'react-router';

const FormAdmin = ({ showPopup, setShowPopup }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const popupClose = () => {
    resetForm();
    setError('');
    setShowPopup(false);
  };

  const resetForm = () => {
    setName('');
    setPassword('');
  };

  const handlerBtn = () => {
    if (name === 'admin' && password === '1234') {
      dispatch(validationAdmin(true));
      navigate('/admin');
      window.localStorage.setItem(
        'user',
        JSON.stringify({
          isAdmin: true,
        })
      );
      popupClose();
    } else {
      langEn
        ? setError('wrong username or password')
        : setError('неправильное имя пользователя или пароль');
    }
  };

  const handlerName = (e) => {
    setError('');
    const { value } = e.target;
    setName(value);
  };

  const handlerPassword = (e) => {
    setError('');
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <Modal show={showPopup} onHide={popupClose}>
      <Modal.Body>
        <Form>
          <Form.Control
            type="text"
            placeholder={langEn ? 'Enter name' : 'Введите имя'}
            style={{ marginBottom: '10px' }}
            onChange={handlerName}
          />
          <Form.Control
            type="password"
            placeholder={langEn ? 'Enter password' : 'Введите пароль'}
            onChange={handlerPassword}
          />
          {error ? (
            <span style={{ color: 'red', fontSize: '10px' }}>***{error}</span>
          ) : null}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handlerBtn}>
          {langEn ? 'Enter' : 'Войти'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormAdmin;
