import { useEffect, useState } from 'react';
import { getAllPost } from '../../server/api/post';
import BasePage from '../../shared/basePage/basePage';
import WordCloud from './wordCloud/wordCloud';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllPost().then((res) => {
      setPosts(res);
      const allTags = new Set(res.map((el) => el.tags).flat());
      setTags(Array.from(allTags));
    });
  }, []);

  return (
    <>
      <WordCloud tags={tags} />
      <BasePage posts={posts} />
    </>
  );
};
export default HomePage;
