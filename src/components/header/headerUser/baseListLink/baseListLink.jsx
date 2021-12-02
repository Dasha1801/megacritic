import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { headerLinkInfo } from './headerLinkInfo';
import styles from '../../header.module.css';
import { setActive } from '../../../../utils';


const BaseListLink = () => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
 
  return (
    <>
      {headerLinkInfo.map((el) => {
        return (
          <NavLink
            key={el.en}
            to={el.path}
            className={`${styles.link} ${setActive}`}
          >
            {langEn ? `${el.en}` : `${el.ru}`}
          </NavLink>
        );
      })}
    </>
  );
};

export default BaseListLink;
