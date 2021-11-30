import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReview } from '../../redux/action';
import { getComments } from '../../server/api/comment';
import CardReview from '../../shared/cardReview/cardReview';
import { getInfoReview } from '../../utils';
import SideBar from '../sidebar/sidebar';
import CardComment from './cardComment/cardComment';
import CardCreateComment from './cardCreateComment/cardCreateComment';

const ReviewPage = () => {
  const review = useSelector(({ review }) => review);
  const dispatch = useDispatch();
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const [comments, setComments] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const reviewInfo = getInfoReview();
    if (reviewInfo) {
      dispatch(getReview(reviewInfo));
    }
  }, [review.title, dispatch]);

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
  }, [isUpdate, review.id]);

  return (
    <>
      <SideBar />
      <div>
        <CardReview info={review} />

        {isLogin ? (
          <>
            <CardCreateComment setIsUpdate={setIsUpdate} />
            {comments.map((item) => {
              return <CardComment comment={item} key={item.id} />;
            })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default ReviewPage;
