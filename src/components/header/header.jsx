import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Modal,
  ListGroup,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import Lang from './lang/lang';
import { useSelector } from 'react-redux';
import { getResult } from '../../server/api/search';
import { useState } from 'react';
import { getReview } from '../../redux/action';
import { useDispatch } from 'react-redux';

const Header = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const dispatch = useDispatch();
  const [word, setWord] = useState('');
  const [searchRes, setSearchRes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const popupClose = () => setShowPopup(false);

  const handleButton = async () => {
    const res = await getResult({ term: word });
    setSearchRes(res);
    setWord('');
    setShowPopup(true);
  };

  const showReview = (el) => {
    dispatch(getReview(el));
    popupClose();
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
      <Modal show={showPopup} onHide={popupClose}>
        <Modal.Body>
          {searchRes.length ? (
            <ListGroup>
              {searchRes.map((el) => {
                return (
                  <NavLink exact to="/review">
                    <ListGroup.Item onClick={()=>showReview(el)}>
                      {el.title}
                    </ListGroup.Item>
                  </NavLink>
                );
              })}
            </ListGroup>
          ) : langEn ? (
            'No results were found for your request.'
          ) : (
            'По вашему запросу результатов не найдено.'
          )}
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default Header;
