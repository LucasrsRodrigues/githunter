import React from 'react';
import Skeleton from '../../Skeleton';

import { Container, Panel } from './styles';

const LoadingStatistic: React.FC = () => {
  return (
    <Container>
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

export default LoadingStatistic;
