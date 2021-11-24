import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addUser, getPosts, logIn } from '../../../redux/action';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import styles from './cardUser.module.css';
import { useCallback, useEffect, useState } from 'react';
import { getThumbs } from '../../../server/api/thumbs';

const CardUser = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const user = useSelector(({ user }) => user);
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const dispatch = useDispatch();
  const [up, setUp] = useState('');
  const [down, setDown] = useState('');

  const logOut = () => {
    dispatch(logIn(!isLogin));
    dispatch(addUser({ name: '', photo: '', id: '' }));
    dispatch(getPosts([]));
  };

  const getMyThumbs = useCallback(async () => {
    const thumbs = await getThumbs();
    const myThumbs = thumbs.filter((el) => user.id === el.reviewUid);
    const thumbsUp = myThumbs.reduce((acc, el) => {
      acc += el.thumbsUp;
      return acc;
    }, 0);
    const thumbsDown = myThumbs.reduce((acc, el) => {
      acc += el.thumbsDown;
      return acc;
    }, 0);
    setUp(thumbsUp);
    setDown(thumbsDown);
  }, [user.id]);

  useEffect(() => {
    getMyThumbs();
  }, [getMyThumbs]);

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={user.photo} className={styles.photo} />
      <Card.Body>
        <Card.Title className={styles.name}>{user.name}</Card.Title>
        <Card.Footer className={styles.likes}>
          <div className={styles.thumbs}>
            <FaRegThumbsDown
              size={20}
              className={styles.thumbIcon}
              color="red"
            />
            <span>{down && down}</span>
          </div>
          <div className={styles.thumbs}>
            <FaRegThumbsUp
              size={20}
              className={styles.thumbIcon}
              color="green"
            />
            <span>{up && up}</span>
          </div>
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
