import styles from './tagsList.module.css';

const TagsList = ({ tags }) => {
  return (
    <div className={styles.wrapperTags}>
      {tags.map((el) => {
        return <span className={styles.tag}>{el}</span>;
      })}
    </div>
  );
};

export default TagsList;
