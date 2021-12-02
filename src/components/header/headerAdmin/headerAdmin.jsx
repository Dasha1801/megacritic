import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn, validationAdmin } from '../../../redux/action';
import { setActive } from '../../../utils';
import styles from '../header.module.css';

const HeaderAdmin = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const dispatch = useDispatch();

  const logOutAdmin = () => {
    dispatch(validationAdmin(false));
    dispatch(logIn(false));
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('review');
  };

  return (
    <Nav>
      <NavLink to="/admin" className={`${styles.link} ${setActive}`}>
        {langEn ? 'admin' : 'администратор'}
      </NavLink>
      <NavLink
        to="/"
        className={`${styles.link} ${setActive}`}
        onClick={logOutAdmin}
      >
        {langEn ? 'LogOut' : 'Выйти'}
      </NavLink>
    </Nav>
  );
};

export default HeaderAdmin;
