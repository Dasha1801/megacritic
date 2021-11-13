import { useEffect, useState } from 'react';
import { getAllPost } from '../../server/api';
import CardReview from '../cardReview/cardReview';
import SideBar from '../sidebar/sidebar';
import styles from './loginPage.module.css';

const LoginPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost().then((res) => {
      setPosts(res);
    });
  },[]);


  return (
    <div className={styles.loginPage}>
      <SideBar />
      {posts.map((info) => {
        return <CardReview info={info} key={info.title} />;
      })}
    </div>
  );
};
export default LoginPage;
