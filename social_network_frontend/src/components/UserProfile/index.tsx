import React from 'react';
import * as S from './style';

export interface UserProfileProps {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
  bio: string;
  isFollowing: boolean;
  onToggleFollow: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  username,
  profile_picture,
  first_name,
  last_name,
  bio,
  isFollowing,
  onToggleFollow,
}) => {
  return (
    <div className="container">
      <S.Container>
        <S.Header>
          <S.ProfilePic alt={`${username} profile`} src={profile_picture} />
          <S.Name>{first_name} {last_name}<S.Username>{username}</S.Username></S.Name>
          <S.Button onClick={onToggleFollow}>
            {isFollowing ? 'Unfollow' : 'Follow'}
          </S.Button>
        </S.Header>
        <div>
          <S.Bio>{bio}</S.Bio>
        </div>
      </S.Container>
    </div>
  );
};
