import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../server/api/comment';
import CardReview from '../../shared/cardReview/cardReview';
import SideBar from '../sidebar/sidebar';
import CardComment from './cardComment/cardComment';
import CardCreateComment from './cardCreateComment/cardCreateComment';

const ReviewPage = () => {
  const review = useSelector(({ review }) => review);
  const [comments, setComments] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await getComments();
      setComments(response.filter((el) => el.reviewId === review.id));
    }
    if (isUpdate) {
      fetchData();
      setIsUpdate(false);
      return;
    }
    fetchData();
  }, [review.id, isUpdate]);

  return (
    <>
      <SideBar />
      <div>
        <CardReview info={review} />
        <CardCreateComment setIsUpdate={setIsUpdate} />
        {comments.map((item) => {
          return <CardComment comment={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default ReviewPage;
