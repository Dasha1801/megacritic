import { useSelector } from 'react-redux';
import CardCreateReview from '../../shared/cardCreateReview/cardCreateReview';
import CardUser from './cardUser/cardUser';
import ReviewsList from './reviewsList/reviewsList';
import styles from './userPage.module.css';

const UserPage = () => {
  const isLogin = useSelector(({ isLogin }) => isLogin);

  return (
    <>
      <div className={styles.userPage}>
        {isLogin ? <CardUser /> : null}
        <CardCreateReview />
      </div>
      <ReviewsList />
    </>
  );
};

export default UserPage;
