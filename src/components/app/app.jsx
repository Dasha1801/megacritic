import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../adminPage/adminPage';
import BooksPage from '../booksPage/booksPage';
import GamesPage from '../gamesPage/gamesPage';
import Header from '../header/header';
import HomePage from '../homePage/homePage';
import MoviesPage from '../moviesPage/moviesPage';
import ReviewPage from '../reviewPage/reviewPage';
import UserPage from '../userPage/userPage';
import styles from './app.module.css';

const App = () => {
  return (
    <Container className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/review/*" element={<ReviewPage />} />
      </Routes>
    </Container>
  );
};

export default App;
