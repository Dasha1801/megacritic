import { useCallback, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPosts, logIn } from '../../../redux/action';
import { getThumbs } from '../../../server/api/thumbs';
import { getInfoUser } from '../../../utils';
import styles from './cardUser.module.css';

const CardUser = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const dispatch = useDispatch();
  const [up, setUp] = useState('');
  const [down, setDown] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [id, setId] = useState('');

  const logOut = () => {
    dispatch(logIn(!isLogin));
    dispatch(getPosts([]));
    window.localStorage.removeItem('user');
  };

  const getMyThumbs = useCallback(async () => {
    const thumbs = await getThumbs();
    const myThumbs = thumbs.filter((el) => id === el.reviewUid);
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
  }, [id]);

  useEffect(() => {
    getMyThumbs();
  }, [getMyThumbs]);

  useEffect(() => {
    const { id, photo, name } = getInfoUser();
    if (name) {
      setName(name);
      setId(id);
      setPhoto(photo);
    }
  }, []);

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={photo} className={styles.photo} />
      <Card.Body>
        <Card.Title className={styles.name}>{name}</Card.Title>
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
