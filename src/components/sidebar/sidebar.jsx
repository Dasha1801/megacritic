import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaUserLock } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import socialAuth from '../../configAuth/auth';
import { facebookProvider, googleProvider } from '../../configAuth/provider';
import { logIn } from '../../redux/action';
import { getInfoUser } from '../../utils';
import FormAdmin from './formAdmin/formAdmin';
import styles from './sidebar.module.css';

const SideBar = () => {
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const isAdmin = useSelector(({ isAdmin }) => isAdmin);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const user = getInfoUser();
  if (user) {
    dispatch(logIn(true));
  }

  const handleBtn = async (provider) => {
    const res = await socialAuth(provider);
    if (res) {
      dispatch(logIn(true));
      window.localStorage.setItem(
        'user',
        JSON.stringify({
          name: res.displayName,
          photo: res.photoURL,
          id: res.uid,
        })
      );
    }
  };

  return (
    <ListGroup className={styles.sidebar}>
      {!(isAdmin || isLogin) ? (
        <>
          <ListGroup.Item
            className={styles.fb}
            onClick={() => handleBtn(facebookProvider)}
          />
          <ListGroup.Item
            className={styles.google}
            onClick={() => handleBtn(googleProvider)}
          />
          <FaUserLock
            className={styles.iconAdmin}
            onClick={() => setShowPopup(true)}
          />
        </>
      ) : null}
      <FormAdmin showPopup={showPopup} setShowPopup={setShowPopup} />
    </ListGroup>
  );
};
export default SideBar;
