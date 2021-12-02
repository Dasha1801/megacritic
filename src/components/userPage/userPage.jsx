import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, validationAdmin } from '../../redux/action';
import CardCreateReview from '../../shared/cardCreateReview/cardCreateReview';
import { getInfoUser } from '../../utils';
import CardUser from './cardUser/cardUser';
import ReviewsList from './reviewsList/reviewsList';
import styles from './userPage.module.css';

const UserPage = () => {
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const isAdmin = useSelector(({ isAdmin }) => isAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = getInfoUser();
    if (user) {
      if (user.name) {
        dispatch(logIn(true));
      } else {
        dispatch(validationAdmin(true));
      }
    }
  }, [isLogin, isAdmin, dispatch]);

  return (
    <>
      <div className={styles.userPage}>
        {isLogin && !isAdmin ? <CardUser /> : null}
        <CardCreateReview />
      </div>
      <ReviewsList />
    </>
  );
};

export default UserPage;
