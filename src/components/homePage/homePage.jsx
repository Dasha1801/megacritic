import { useEffect, useState } from 'react';
import { getAllPost } from '../../server/api';
import BasePage from '../../shared/basePage/basePage';
import WordCloud from '../wordCloud/wordCloud';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getAllPost().then((res) => {
      setPosts(res);
      setTags(new Set(res.map(el => [...el.tags]).flat()));
    });
  }, []);

  return (
    <>
      <WordCloud tags={tags}/>
      <BasePage posts={posts} />
    </>
  );
};
export default HomePage;
