import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sidebar.module.css';
import socialAuth from '../../configAuth/auth';
import { addUser, logIn } from '../../redux/action';
import { facebookProvider, googleProvider } from '../../configAuth/provider';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const user = useSelector(({ user }) => user);
 
  const dispatch = useDispatch();
  const handleBtn = async (provider) => {
    const res = await socialAuth(provider);
    if (res) {
      dispatch(logIn(true));
      dispatch(
        addUser({
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
      ) : (
        <NavLink to="/user">
          <img
            className={styles.user}
            src={user.photo}
            alt=""
            title={user.name}
          />
        </NavLink>
      )}
    </ListGroup>
  );
};
export default SideBar;
