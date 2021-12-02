import MDEditor from '@uiw/react-md-editor';
import { useCallback, useEffect, useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { FaEye, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getReview } from '../../redux/action';
import { getRatingsReview } from '../../server/api/rating';
import { sendThumbs } from '../../server/api/thumbs';
import { getInfoUser } from '../../utils';
import TagsList from '../cardCreateReview/tagsList/tagsList';
import styles from './cardReview.module.css';
import StarRating from './starRating/starRating';

const CardReview = ({ info }) => {
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const dispatch = useDispatch();
  const { image, post, rating, title, category, tags, uid, id } = info;
  const [thumbsDown, setThumbsDown] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [userId, setUserId] = useState('');
  const [showImg, setShowImg] = useState(false);
  const [photo, setPhoto] = useState('');

  const handleClose = () => {
    setShowImg(false);
    setPhoto('');
  };

  const showPhoto = (src) => {
    setPhoto(src);
    setShowImg(true);
  };

  const showReview = () => {
    dispatch(getReview(info));
    window.localStorage.setItem('review', JSON.stringify(info));
  };

  const handleThumbsDown = () => {
    setThumbsDown(!thumbsDown);
    setThumbsUp(false);
    sendThumbs({
      thumbsUp: 0,
      thumbsDown: 1,
      uid: userId,
      reviewId: id,
      reviewUid: uid,
    });
  };

  const handleThumbsUp = () => {
    setThumbsUp(!thumbsUp);
    setThumbsDown(false);
    sendThumbs({
      thumbsUp: 1,
      thumbsDown: 0,
      uid: userId,
      reviewId: id,
      reviewUid: uid,
    });
  };

  const getRatings = useCallback(async () => {
    const ratings = await getRatingsReview({ id: id });
    setRatings(ratings);
  }, [id]);

  const getSumRatings = () => {
    const sumRatings = ratings.reduce((acc, el) => {
      acc += el.rating;
      return acc;
    }, 0);
    return sumRatings;
  };

  const getMediumRating = () => {
    const countRating = getSumRatings();
    const mediumRating = (countRating + rating) / (ratings.length + 1);
    return Math.round(mediumRating * 10) / 10;
  };

  useEffect(() => {
    const user = getInfoUser();
    if (user) {
      setUserId(user.id);
    }
  }, [isLogin]);

  useEffect(() => {
    getRatings();
  }, [getRatings]);

  return (
    <>
      <Card className={styles.card}>
        <Card.Header className={styles.headerCard}>
          <h5>{category}</h5>
          {isLogin && userId !== uid && <StarRating reviewId={id} />}
          <h5>{getMediumRating()}/10</h5>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {title}
            <NavLink to="/review">
              {isLogin && (
                <FaEye
                  color="#0d6efd"
                  className={styles.iconEye}
                  onClick={showReview}
                />
              )}
            </NavLink>
          </Card.Title>
          <MDEditor.Markdown source={post} className={styles.text} />
          {image.length
            ? image.map((el, index) => {
                return (
                  <Card.Img
                    variant="top"
                    src={el}
                    className={styles.img}
                    key={index}
                    onClick={() => showPhoto(el)}
                  />
                );
              })
            : null}
          <TagsList tags={tags} />
        </Card.Body>
        {isLogin && userId !== uid && (
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
      <Modal show={showImg} onHide={handleClose}>
        <Modal.Body>
          <Card.Img src={photo} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CardReview;
