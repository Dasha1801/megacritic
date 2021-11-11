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
import Lang from '../lang/lang';
import { useSelector } from 'react-redux';

const Header = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);

  const handleButton = () => {
    console.log('btn work');
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
