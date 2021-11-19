import { useEffect, useState } from 'react';
import { getAllGames } from '../../server/api';
import BasePage from '../../shared/basePage/basePage';

const GamesPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllGames().then((res) => {
      setPosts(res);
    });
  }, []);

  return <BasePage posts={posts} />;
};
export default GamesPage;
