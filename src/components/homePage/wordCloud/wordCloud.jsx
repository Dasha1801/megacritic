import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import ReactWordcloud from 'react-wordcloud';
import styles from './wordCloud.module.css';
import { callbacks, options, randomNumber } from './wordCloudInfo';

const WordCloud = ({ tags }) => {
  const tagsArr = Array.from(tags);

  const words = tagsArr.map((el) => {
    return { text: el, value: randomNumber() };
  });

  return (
    <div className={styles.cloud}>
      <ReactWordcloud
        words={words}
        options={options}
        callbacks={callbacks}
        maxWords={50}
      />
    </div>
  );
};

export default WordCloud;
