import React from 'react';

import { Container } from './styles';

interface UserCardProps {
  user: {
    id: string;
    avatar_url: string;
    login: string;
  };
}
const UserCard: React.FC<UserCardProps> = ({ user }: UserCardProps) => {
  return (
    <Container to={`/user/${user.login}`} className="user">
      <img src={user.avatar_url} alt={user.login} />
      <h1>{user.login}</h1>
    </Container>
  );
};

export default UserCard;
