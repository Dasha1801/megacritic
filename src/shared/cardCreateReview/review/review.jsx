import styles from './review.module.css';
import MDEditor from '@uiw/react-md-editor';

const Review = ({ setPost, value }) => {
  return (
    <div className={styles.review}>
      <MDEditor value={value} onChange={setPost} />
    </div>
  );
};

export default Review;
