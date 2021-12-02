import { useCallback, useEffect, useState } from 'react';
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

  const getAllComments = useCallback(async () => {
    const allComments = await getComments({ reviewId: review.id });
    setComments(allComments);
  }, [review.id]);

  useEffect(() => {
    const reviewInfo = getInfoReview();
    if (reviewInfo) {
      dispatch(getReview(reviewInfo));
    }
  }, [review.title, dispatch]);

  useEffect(() => {
    getAllComments();
  }, [getAllComments]);

  useEffect(() => {
    if (isUpdate) {
      getAllComments();
      setIsUpdate(false);
    }
  }, [isUpdate, getAllComments]);

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
