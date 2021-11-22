import styles from './cardReview.module.css';
import { Card } from 'react-bootstrap';
import StarRating from './starRating/starRating';
import { FaRegThumbsUp, FaEye, FaRegThumbsDown } from 'react-icons/fa';
import TagsList from '../cardCreateReview/tagsList/tagsList';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getReview } from '../../redux/action';

const CardReview = ({ info }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const user = useSelector(({ user }) => user);
  const { image, post, rating, title, category, tags, name } = info;
  const [thumbsDown, setThumbsDown] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(false);

  const handleThumbsDown = () => {
    setThumbsDown(true);
    setThumbsUp(false);
  };

  const handleThumbsUp = () => {
    setThumbsUp(true);
    setThumbsDown(false);
  };

  return (
    <Card className={styles.card}>
      <Card.Header className={styles.headerCard}>
        <h5>{category}</h5>
        {isLogin && user.email !== name && <StarRating rating={rating} />}
        <h5>{rating}/10</h5>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          {title}
          <NavLink exact to="/review">
            {isLogin && (
              <FaEye
                color="#0d6efd"
                className={styles.iconEye}
                onClick={() => dispatch(getReview(info))}
              />
            )}
          </NavLink>
        </Card.Title>
        <Card.Text>
          <MDEditor.Markdown source={post} />
        </Card.Text>
        {image.length &&
          image.map((el, index) => {
            return (
              <Card.Img
                variant="top"
                src={el}
                className={styles.img}
                key={index}
              />
            );
          })}
        <TagsList tags={tags} />
      </Card.Body>
      {isLogin && user.email !== name && (
        <Card.Footer className={styles.likes}>
          <FaRegThumbsDown
            size={30}
            className={styles.thumbIcon}
            color={thumbsDown ? 'red' : 'gray'}
            onClick={handleThumbsDown}
          />
          <FaRegThumbsUp
            size={30}
            className={styles.thumbIcon}
            color={thumbsUp ? 'green' : 'gray'}
            onClick={handleThumbsUp}
          />
        </Card.Footer>
      )}
    </Card>
  );
};
export default CardReview;
