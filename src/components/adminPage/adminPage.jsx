import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaBan, FaEye } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getPosts } from '../../redux/action';
import { deletePost, getAllPost } from '../../server/api/post';
import styles from './adminPage.module.css';

const AdminPage = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUser = (el) => {
    window.localStorage.removeItem('user');
    window.localStorage.setItem(
      'user',
      JSON.stringify({
        id: el,
      })
    );
    navigate('/user');
  };

  const deleteUser = (el) => {
    const postsUser = posts.filter((item) => item.uid === el);
    postsUser.forEach((el) => {
      deletePost(el);
    });
  };

  useEffect(() => {
    getAllPost().then((res) => {
      dispatch(getPosts(res));
      setPosts(res);
    });
    setUsers(Array.from(new Set(posts.map((el) => el.uid))));
  }, [dispatch, posts.length]);

  return (
    <div className={styles.userCards}>
      {users.length
        ? users.map((el) => {
            return (
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title>User ID:</Card.Title>
                  <Card.Text>{el}</Card.Text>
                </Card.Body>
                <Card.Footer className={styles.footer}>
                  <FaEye
                    className={styles.icon}
                    color="#0d6efd"
                    size="26px"
                    onClick={() => getUser(el)}
                  />
                  <FaBan
                    color="#d12c1f"
                    size="20px"
                    className={styles.icon}
                    onClick={() => deleteUser(el)}
                  />
                </Card.Footer>
              </Card>
            );
          })
        : null}
    </div>
  );
};
export default AdminPage;
