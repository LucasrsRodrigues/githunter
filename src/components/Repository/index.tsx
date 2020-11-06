import React from 'react';

import { Container } from './styles';

interface RepositoryProps {
  owner_name: string;
  repository_name: string;
}

const Repository: React.FC<RepositoryProps> = ({
  owner_name,
  repository_name,
}: RepositoryProps) => {
  return (
    <Container>
      <a href="/">
        <img
          src={`https://github-readme-stats.vercel.app/api/pin/?username=${owner_name}&hide_border=true&repo=${repository_name}&theme=buefy`}
          alt=""
        />
      </a>
    </Container>
  );
};

export default Repository;
