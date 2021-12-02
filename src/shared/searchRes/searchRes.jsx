import { ListGroup, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getReview } from '../../redux/action';

const SearchRes = ({ searchRes, setShowPopup, showPopup }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const dispatch = useDispatch();
  const popupClose = () => setShowPopup(false);

  const showReview = (el) => {
    window.localStorage.setItem('review', JSON.stringify(el));
    dispatch(getReview(el));
    popupClose();
  };

  return (
    <Modal show={showPopup} onHide={popupClose}>
      <Modal.Body>
        {searchRes.length ? (
          <ListGroup>
            {searchRes.map((el) => {
              return (
                <NavLink to="/review" key={el.title}>
                  <ListGroup.Item onClick={() => showReview(el)}>
                    {el.title}
                  </ListGroup.Item>
                </NavLink>
              );
            })}
          </ListGroup>
        ) : langEn ? (
          'No results were found for your request.'
        ) : (
          'По вашему запросу результатов не найдено.'
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SearchRes;
