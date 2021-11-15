import MarkdownEditor from '@uiw/react-markdown-editor';
import { useSelector } from 'react-redux';
import styles from './review.module.css';

const Review = ({ setPost, value }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);

  return (
    <MarkdownEditor
      placeholder={langEn ? 'Write your new review' : 'Напиши свой новый обзор'}
      value={value}
      onChange={(editor, data, value) => setPost(value)}
      className={styles.review}
    />
  );
};

export default Review;
