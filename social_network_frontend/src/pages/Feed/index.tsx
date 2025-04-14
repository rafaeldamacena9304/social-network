import { useEffect, useState } from 'react';
import { CreatePostPlacerholder } from '../../components/CreatePostPlaceholder';
import { FeedPost, feedPostProps } from '../../components/FeedPost';
import { ButtonFilter, NoPost } from './style';
import { useNavigate } from 'react-router-dom';

export const FeedPage = () => {
  const [posts, setPosts] = useState<feedPostProps[]>([]);
  const [showFollowing, setShowFollowing] = useState(false);
  const token = localStorage.getItem('access_token');

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || token === undefined || token === '') {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    const filter = showFollowing ? '?following=true' : '';

    fetch(`http://127.0.0.1:8000/home${filter}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [showFollowing]);

  return (
    <div className="container">
      <p className="mainTitle">A social network.</p>
      <CreatePostPlacerholder />
        <ButtonFilter onClick={() => setShowFollowing(!showFollowing)}>
          {showFollowing ? 'See all posts' : 'See only following'}
        </ButtonFilter>

      {posts.length > 0 &&
        posts.map((post) => (
          <FeedPost
            id={post.id}
            key={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
          />
        ))}
      {posts.length <= 0 && <NoPost>There is no post for now. </NoPost>}
    </div>
  );
};
