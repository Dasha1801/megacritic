import { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, validationAdmin } from '../../redux/action';
import SearchRes from '../../shared/searchRes/searchRes';
import { getInfoUser } from '../../utils';
import styles from './header.module.css';
import HeaderAdmin from './headerAdmin/headerAdmin';
import HeaderUser from './headerUser/headerUser';

const Header = () => {
  const isAdmin = useSelector(({ isAdmin }) => isAdmin);
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const dispatch = useDispatch();
  const [searchRes, setSearchRes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const user = getInfoUser();
    if (user) {
      if (user.name) { 
        dispatch(logIn(true));
      } else {
        dispatch(validationAdmin(true));
      }
    }
  }, [isLogin, isAdmin, dispatch]); 
  
  return (
    <Navbar bg="light" expand="lg" fix="top" className={styles.header}>
      {!isAdmin ? (
        <HeaderUser setShowPopup={setShowPopup} setSearchRes={setSearchRes} />
      ) : (
        <HeaderAdmin />
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
