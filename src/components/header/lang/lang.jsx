import { useDispatch, useSelector } from 'react-redux';
import styles from './lang.module.css';
import { setLang } from '../../../redux/action';

const Lang = () => {
  const langParams = useSelector(({ isLangEn }) => isLangEn);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setLang(!langParams));
  };
  return (
    <div className={styles.lang}>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          RU
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          onChange={handleChange}
          checked={langParams}
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          EN
        </label>
      </div>
    </div>
  );
};

export default Lang;
