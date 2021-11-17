import MarkdownEditor from '@uiw/react-markdown-editor';
import styles from './review.module.css';

const Review = ({ setPost, value }) => {

  return (
    <MarkdownEditor
      value={value}
      onChange={(editor, data, value) => setPost(value)}
      className={styles.review}
    />
  );
};

export default Review;
