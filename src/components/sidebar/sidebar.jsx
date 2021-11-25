import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import socialAuth from '../../configAuth/auth';
import { facebookProvider, googleProvider } from '../../configAuth/provider';
import { logIn } from '../../redux/action';
import { getInfoUser } from '../../utils';
import styles from './sidebar.module.css';

const SideBar = () => {
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const dispatch = useDispatch();

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
      {!isLogin ? (
        <>
          <ListGroup.Item
            className={styles.fb}
            onClick={() => handleBtn(facebookProvider)}
          />
          <ListGroup.Item
            className={styles.google}
            onClick={() => handleBtn(googleProvider)}
          />
        </>
      ) : null}
    </ListGroup>
  );
};
export default SideBar;
