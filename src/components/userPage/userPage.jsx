import CardReview from '../cardReview/cardReview';
import CardUser from '../cardUser/cardUser';
import styles from './userPage.module.css';

const UserPage = () => {
  return (
    <div className={styles.userPage}>
      <CardUser />
      <CardReview />
    </div>
  );
};

export default UserPage;
