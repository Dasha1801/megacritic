import styles from './cardReview.module.css';
import { Card } from 'react-bootstrap';
import StarRating from './starRating/starRating';
import { FaRegThumbsUp, FaEye, FaRegThumbsDown } from 'react-icons/fa';
import TagsList from '../cardCreateReview/tagsList/tagsList';
import { useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getReview } from '../../redux/action';
import { getRatings } from '../../server/api/rating';
import { sendThumbs } from '../../server/api/thumbs';
import { getInfoUser } from '../../utils';

const CardReview = ({ info }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(({ isLogin }) => isLogin);
  // const user = useSelector(({ user }) => user);
  const user = getInfoUser();
  const { image, post, rating, title, category, tags, uid, id } = info;
  const [thumbsDown, setThumbsDown] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [ratings, setRatings] = useState([]);

  const handleThumbsDown = () => {
    setThumbsDown(!thumbsDown);
    setThumbsUp(false);

    sendThumbs({
      thumbsUp: 0,
      thumbsDown: 1,
      uid: user.id,
      reviewId: id,
      reviewUid:uid
    });
  };

  const handleThumbsUp = () => {
    setThumbsUp(!thumbsUp);
    setThumbsDown(false);
    sendThumbs({
      thumbsUp: 1,
      thumbsDown: 0,
      uid: user.id,
      reviewId: id,
      reviewUid:uid
    });
  };

  const getAllRatings = useCallback(async () => {
    const allRatings = await getRatings();
    const ratings = allRatings.filter((el) => el.reviewId === id);
    setRatings(ratings);
  }, [id]);

  const getMediumRating = () => {
    const countRating = ratings.reduce((acc, el) => {
      acc += el.rating;
      return acc;
    }, 0);
    const mediumRating = (countRating + rating) / (ratings.length + 1);
    return Math.round(mediumRating * 10) / 10;
  };

  useEffect(() => {
    getAllRatings();
  }, [getAllRatings]);

  return (
    <Card className={styles.card}>
      <Card.Header className={styles.headerCard}>
        <h5>{category}</h5>
        {isLogin && user.id !== uid && <StarRating reviewId={id} />}
        <h5>{getMediumRating()}/10</h5>
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
        {image.length
          ? image.map((el, index) => {
              return (
                <Card.Img
                  variant="top"
                  src={el}
                  className={styles.img}
                  key={index}
                />
              );
            })
          : null}
        <TagsList tags={tags} />
      </Card.Body>
      {isLogin && user.id !== uid && (
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
