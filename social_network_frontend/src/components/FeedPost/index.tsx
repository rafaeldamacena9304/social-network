import { Link } from 'react-router-dom';
import * as S from './style';
import { useEffect, useState } from 'react';

export interface feedPostProps {
  id: number;
  title: string;
  author: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string;
  };
  content: string;
}

export const FeedPost = (props: feedPostProps) => {
  const [isFollowing, setIsFollowing] = useState<boolean | null>(null);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/is_following_user/${props.author.username}/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setIsFollowing(data.is_following))
      .catch((error) => console.error(error));
  }, [props.author.username, token]);

  const handleFollowToggle = () => {
    const url = isFollowing
      ? `http://127.0.0.1:8000/unfollow/${props.author.username}/`
      : `http://127.0.0.1:8000/follow/${props.author.username}/`;

    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => setIsFollowing(!isFollowing))
      .catch((error) => console.error(error));
  };

  return (
    <S.Container>
      <S.Header>
        <S.UserProfile>
          <S.UserProfilePic
            alt={props.id.toString()}
            src={props.author.profile_picture}
          />
          <S.Username as={Link} to={`/user_profile/${props.author.username}`}>
            {props.author.username}
          </S.Username>
        </S.UserProfile>
        <S.FollowButton onClick={handleFollowToggle}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </S.FollowButton>
      </S.Header>
      <S.Body>
        <S.Title>{props.title}</S.Title>
        <S.Content>{props.content}</S.Content>
      </S.Body>
    </S.Container>
  );
};
