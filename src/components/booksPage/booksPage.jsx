import { useEffect, useState } from 'react';
import { getAllBooks} from '../../server/api';
import BasePage from '../../shared/basePage/basePage';

const BooksPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllBooks().then((res) => {
      setPosts(res);
    });
  }, []);

  return <BasePage posts={posts} />;
};
export default BooksPage;
