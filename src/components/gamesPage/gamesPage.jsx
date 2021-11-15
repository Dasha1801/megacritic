import { useEffect, useState } from 'react';
import { getAllPost } from '../../server/api';
import BasePage from '../../shared/basePage/basePage';

const GamesPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost().then((res) => {
      setPosts(res.filter((el) => el.category === 'games'));
    });
  }, []);

  return <BasePage posts={posts} />;
};
export default GamesPage;
