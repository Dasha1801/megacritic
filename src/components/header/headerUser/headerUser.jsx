import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setActive } from '../../../utils';
import styles from '../header.module.css';
import BaseListLink from './baseListLink/baseListLink';
import Lang from './lang/lang';
import SearchForm from './searchForm/searchForm';

const HeaderUser = (props) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const isLogin = useSelector(({ isLogin }) => isLogin);

  return (
    <Container fluid>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {isLogin ? (
            <NavLink to="/user" className={`${styles.link} ${setActive}`}>
              {langEn ? 'my page' : 'моя страница'}
            </NavLink>
          ) : null}
          <BaseListLink />
        </Nav>
        <Lang />
        <SearchForm props={props} />
      </Navbar.Collapse>
    </Container>
  );
};

export default HeaderUser;
