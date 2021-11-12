import CardCreateReview from '../cardCreateReview/cardCreateReview';
import CardUser from '../cardUser/cardUser';
import styles from './userPage.module.css';

const UserPage = () => {
  return (
    <div className={styles.userPage}>
      <CardUser />
      <CardCreateReview />
    </div>
  );
};

export default UserPage;
