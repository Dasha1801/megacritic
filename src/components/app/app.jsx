import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksPage from '../booksPage/booksPage';
import GamesPage from '../gamesPage/gamesPage';
import Header from '../header/header';
import HomePage from '../homePage/homePage';
import MoviesPage from '../moviesPage/moviesPage';
import UserPage from '../userPage/userPage';
import styles from './app.module.css';

const App = () => {
  return (
    <>
      <Router>
        <Container className={styles.app}>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
