// import Axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sidebar.module.css';
import socialAuth from '../../configAuth/auth';
import { logIn } from '../../redux/action';
import { facebookProvider, googleProvider } from '../../configAuth/provider';

const SideBar = () => {
  const isLogin = useSelector(({ isLogin }) => isLogin);
  const dispatch = useDispatch();
  const handleBtn = async (provider) => {
    const res = await socialAuth(provider);
    if (res) {
      // Axios.post(`https://secure-temple-92041.herokuapp.com/api/users`, {
      // Axios.post(`http://localhost:3001/api/users`, {
      //   name: res.displayName,
      //   photo: res.photoURL,
      // })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      dispatch(logIn(true));
    }
  };
  return (
    <ListGroup className={styles.sidebar}>
      {!isLogin && (
        <>
          <ListGroup.Item
            className={styles.fb}
            onClick={() => handleBtn(facebookProvider)}
          />
          <ListGroup.Item
            className={styles.google}
            onClick={() => handleBtn(googleProvider)}
          />
        </>
      )}
    </ListGroup>
  );
};
export default SideBar;
