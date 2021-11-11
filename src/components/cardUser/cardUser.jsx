import { Card, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { auth } from '../../configAuth/firebaseConfig';
import { logIn } from '../../redux/action';
import styles from './cardUser.module.css';

const CardUser = () => {
  const [user] = useAuthState(auth);
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logIn(!isLogin));
  };

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={user.photoURL} className={styles.photo} />
      <Card.Body>
        <Card.Title className={styles.name}>{user.displayName}</Card.Title>
        <Button variant="secondary" onClick={logOut} className={styles.logOut}>
          {langEn ? 'Log out' : 'Выход'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardUser;
