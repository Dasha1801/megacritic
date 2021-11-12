import { mockReview } from '../../mock';
import CardReview from '../cardReview/cardReview';
import SideBar from '../sidebar/sidebar';
import styles from './loginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <SideBar />
      {mockReview.map((info) => {
        return <CardReview info={info} key={info.title} />;
      })}
    </div>
  );
};
export default LoginPage;
