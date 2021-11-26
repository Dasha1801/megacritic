import { useState } from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn, validationAdmin } from '../../redux/action';
import { getResult } from '../../server/api/search';
import { getInfoUser } from '../../utils';
import SearchRes from '../searchRes/searchRes';
import styles from './header.module.css';
import Lang from './lang/lang';

const Header = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const isAdmin = useSelector(({ isAdmin }) => isAdmin);
  const dispatch = useDispatch();
  const [word, setWord] = useState('');
  const [searchRes, setSearchRes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const user = getInfoUser();
  if (user) {
    dispatch(logIn(true));
  }

  const handleButton = async () => {
    const res = await getResult({ term: word });
    setSearchRes(res);
    setWord('');
    setShowPopup(true);
  };

  return (
    <Navbar bg="light" expand="lg" fix="top" className={styles.header}>
      {!isAdmin ? (
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink to="/" className={styles.link} activeClassName="active">
                {langEn ? 'home' : 'главная'}
              </NavLink>
              <NavLink
                to="/movies"
                className={styles.link}
                activeClassName="active"
              >
                {langEn ? 'movies' : 'кино'}
              </NavLink>
              <NavLink
                to="/books"
                className={styles.link}
                activeClassName="active"
              >
                {langEn ? 'books' : 'книги'}
              </NavLink>
              <NavLink
                to="/games"
                className={styles.link}
                activeClassName="active"
              >
                {langEn ? 'games' : 'игры'}
              </NavLink>
              {isLogin ? (
                <NavLink
                  to="/user"
                  className={styles.link}
                  activeClassName="active"
                >
                  {langEn ? 'my page' : 'моя страница'}
                </NavLink>
              ) : null}
              {isAdmin ? (
                <NavLink
                  to="/admin"
                  className={styles.link}
                  activeClassName="active"
                >
                  {langEn ? 'my page' : 'моя страница'}
                </NavLink>
              ) : null}
            </Nav>
            <Lang />
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder={langEn ? 'Search' : 'Поиск'}
                className="me-2"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <Button variant="primary" onClick={handleButton}>
                {langEn ? 'Search' : 'Поиск'}
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      ) : (
        <Nav>
          <NavLink to="/admin" className={styles.link} activeClassName="active">
            {langEn ? 'admin' : 'администратор'}
          </NavLink>
          <NavLink
            to="/"
            className={styles.link}
            activeClassName="active"
            onClick={() => dispatch(validationAdmin(false))}
          >
            {langEn ? 'LogOut' : 'Выйти'}
          </NavLink>
        </Nav>
      )}
      <SearchRes
        searchRes={searchRes}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </Navbar>
  );
};

export default Header;
