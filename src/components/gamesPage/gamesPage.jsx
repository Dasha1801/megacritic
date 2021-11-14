import { useEffect, useState } from 'react';
import { getAllPost } from '../../server/api';
import CardReview from '../cardReview/cardReview';
import SideBar from '../sidebar/sidebar';

const GamesPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost().then((res) => {
      setPosts(res.filter((el) => el.category === 'games'));
    });
  }, []);

  return (
    <div>
      <SideBar />
      {posts.map((info) => {
        return <CardReview info={info} key={info.id} />;
      })}
    </div>
  );
};
export default GamesPage;
