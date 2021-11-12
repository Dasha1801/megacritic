import { Container } from 'react-bootstrap';
import Header from '../header/header';
import styles from './app.module.css';
// import SideBar from '../sidebar/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserPage from '../userPage/userPage';
import LoginPage from '../loginPage/loginPage';

const App = () => {
  const isLogin = useSelector(({ isLogin }) => isLogin);
  return (
    <>
      <Router>
        <Container className={styles.app}>
          <Header />
          {/* {!isLogin && <SideBar />} */}
          <Routes>
            <Route
              path="/"
              element={isLogin ? <UserPage /> : <LoginPage/>}
            />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
