import React from 'react';
import LoadRepository from '../LoadRepository';

import { Container } from './styles';

const LoadingPagination: React.FC = () => {
  return (
    <Container className="wrapper-projects">
      <LoadRepository statistic={false} />
      <LoadRepository statistic={false} />
      <LoadRepository statistic={false} />
      <LoadRepository statistic={false} />
    </Container>
  );
};

export default LoadingPagination;
