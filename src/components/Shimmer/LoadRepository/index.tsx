import React from 'react';
import Skeleton from '../../Skeleton';

import { Container, Panel } from './styles';

interface LoadRepositoryProps {
  statistic: boolean;
}

const LoadRepository: React.FC<LoadRepositoryProps> = ({
  statistic,
}: LoadRepositoryProps) => {
  return (
    <Container className={statistic ? 'statistic' : ''}>
      <Panel className="no-shadow">
        <header>
          <Skeleton className="avatar-skeleton" />
          <div className="column">
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </div>
        </header>
        <span>
          <Skeleton className="row-skeleton" />
          <Skeleton className="row-skeleton" />
        </span>
      </Panel>
    </Container>
  );
};

export default LoadRepository;
