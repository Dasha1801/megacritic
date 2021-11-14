import { Container } from 'react-bootstrap';
import Header from '../header/header';
import styles from './app.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import UserPage from '../userPage/userPage';
import HomePage from '../homePage/homePage';
import MoviesPage from '../moviesPage/moviesPage';
import GamesPage from '../gamesPage/gamesPage';
import BooksPage from '../booksPage/booksPage';

const App = () => {
  // const isLogin = useSelector(({ isLogin }) => isLogin);
  return (
    <>
      <Router>
        <Container className={styles.app}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<HomePage/>}
            />
             <Route
              path="/movies"
              element={<MoviesPage/>}
            />
            <Route
              path="/games"
              element={<GamesPage/>}
            />
            <Route
              path="/books"
              element={<BooksPage/>}
            />
            <Route
              path="/userPage"
              element={<UserPage/>}
            />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
