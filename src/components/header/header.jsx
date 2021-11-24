import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import Lang from './lang/lang';
import { useSelector } from 'react-redux';
import { getResult } from '../../server/api/search';
import { useState } from 'react';

const Header = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const [word, setWord] = useState('');

  const handleButton = () => {
    getResult({ term: word });
    setWord('');
  };
  return (
    <Navbar bg="light" expand="lg" fix="top" className={styles.header}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink
              exact
              to="/"
              className={styles.link}
              activeClassName="active"
            >
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
    </Navbar>
  );
};

export default Header;
