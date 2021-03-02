/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface RepositoryProps {
  owner_name: string;
  repository_name: string;
  full_name: string;
}

const Repository: React.FC<RepositoryProps> = ({
  owner_name,
  repository_name,
  full_name,
}: RepositoryProps) => {
  return (
    <Container>
      <Link to={`/repository/${full_name}`}>
        <img
          src={`https://github-readme-stats.vercel.app/api/pin/?username=${owner_name}&hide_border=true&repo=${repository_name}&theme=buefy`}
          alt=""
        />
      </Link>
    </Container>
  );
};

export default Repository;
