import { useEffect, useState } from 'react';
import { getAllPost } from '../../server/api';
import BasePage from '../../shared/basePage/basePage';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost().then((res) => {
      setPosts(res);
    });
  }, []);

  return <BasePage posts={posts} />;
};
export default HomePage;
