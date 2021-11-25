import CardCreateReview from '../../shared/cardCreateReview/cardCreateReview';
import CardUser from './cardUser/cardUser';
import ReviewsList from './reviewsList/reviewsList';
import styles from './userPage.module.css';

const UserPage = () => {

  return (
    <>
      <div className={styles.userPage}>
        <CardUser />
        <CardCreateReview />
      </div>
      <ReviewsList />
    </>
  );
};

export default UserPage;
