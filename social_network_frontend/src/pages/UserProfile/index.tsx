import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserProfile } from '../../components/UserProfile';

interface UserData {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
  bio: string;
  isFollowing: boolean;
}

export const UserProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<UserData | null>(null);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    fetch(`http://127.0.0.1:8000/profile_detail/${username}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Usuário não encontrado');
        }
        return response.json();
      })
      .then((data: UserData) => {
        setUser(data);
        console.log(data);
        setIsFollowing(data.isFollowing);
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
      });
  }, [username]);

  const handleToggleFollow = () => {
    if (!user) return;
    const token = localStorage.getItem('access_token');

    const endpoint = isFollowing
      ? `http://127.0.0.1:8000/unfollow/${user.username}/`
      : `http://127.0.0.1:8000/follow/${user.username}/`;

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao atualizar follow status');
        }
        return response.json();
      })
      .then(() => {
        setIsFollowing((prev) => !prev);
      })
      .catch((error) => {
        console.error('Erro na atualização:', error);
      });
  };

  return (
    <>
      <Link to="/" className="mainTitle">
        A social network.
      </Link>
      {user && (
        <UserProfile
          id={user.id}
          username={user.username}
          first_name={user.first_name}
          last_name={user.last_name}
          profile_picture={user.profile_picture}
          bio={user.bio}
          isFollowing={isFollowing}
          onToggleFollow={handleToggleFollow}
        />
      )}
    </>
  );
};
