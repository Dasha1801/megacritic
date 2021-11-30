import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import ReactWordcloud from 'react-wordcloud';
import styles from './wordCloud.module.css';
import { options, randomNumber } from './wordCloudInfo';
import { useState } from 'react';
import SearchRes from '../../../shared/searchRes/searchRes';
import { getResult } from '../../../server/api/search';

const WordCloud = ({ tags }) => {
  const tagsArr = Array.from(tags);
  const [searchRes, setSearchRes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const words = tagsArr.map((el) => {
    return { text: el, value: randomNumber() };
  });

  const findWord = async (word) => {
    let term = `${word.text}`;
    const res = await getResult({ term: term });
    setSearchRes(res);
    setShowPopup(true);
  };

  const callbacks = {
    getWordTooltip: (word) => `${word.text}`,
    onWordClick: (word) => findWord(word),
  };

  return (
    <>
      <div className={styles.cloud}>
        <ReactWordcloud
          words={words}
          options={options}
          callbacks={callbacks}
          maxWords={50}
        />
      </div>
      <SearchRes
        searchRes={searchRes}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </>
  );
};

export default WordCloud;
