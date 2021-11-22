import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addUser, getPosts, logIn } from '../../../redux/action';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import styles from './cardUser.module.css';

const CardUser = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const user = useSelector(({ user }) => user);
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logIn(!isLogin));
    dispatch(addUser({ name: '', photo: '', id: '' }));
    dispatch(getPosts([]));
  };

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={user.photo} className={styles.photo} />
      <Card.Body>
        <Card.Title className={styles.name}>{user.name}</Card.Title>
        <Card.Footer className={styles.likes}>
          <FaRegThumbsDown size={20} className={styles.thumbIcon} color="red" />
          <FaRegThumbsUp size={20} className={styles.thumbIcon} color="green" />
        </Card.Footer>
        <NavLink to="/">
          <Button
            variant="secondary"
            onClick={logOut}
            className={styles.logOut}
          >
            {langEn ? 'Log out' : 'Выход'}
          </Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default CardUser;
