import CardCreateReview from '../cardCreateReview/cardCreateReview';
import CardReview from '../cardReview/cardReview';
import CardUser from '../cardUser/cardUser';
import styles from './userPage.module.css';

const UserPage = () => {
  return (
    <>
    <div className={styles.userPage}>
      <CardUser />
      <CardCreateReview />
    </div>
    <CardReview/>
    </>
  );
};

export default UserPage;
