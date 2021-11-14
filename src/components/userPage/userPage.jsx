import CardCreateReview from '../cardCreateReview/cardCreateReview';
import CardUser from '../cardUser/cardUser';
import ReviewsList from '../reviewsList/reviewsList';
import SideBar from '../sidebar/sidebar';
import styles from './userPage.module.css';

const UserPage = () => {
  return (
    <>
      <div className={styles.userPage}>
        <SideBar/>
        <CardUser />
        <CardCreateReview />
      </div>
      <ReviewsList />
    </>
  );
};

export default UserPage;
