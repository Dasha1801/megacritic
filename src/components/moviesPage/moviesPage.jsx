import { useEffect, useState } from 'react';
import { getAllMovies } from '../../server/api/post';
import BasePage from '../../shared/basePage/basePage';

const MoviesPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllMovies().then((res) => {
      setPosts(res);
    });
  }, []);

  return <BasePage posts={posts} />;
};
export default MoviesPage;
