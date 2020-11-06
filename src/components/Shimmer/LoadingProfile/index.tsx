import React from 'react';
import Skeleton from '../../Skeleton';

import { Container, Panel } from './styles';

const LoadingProfile: React.FC = () => {
  return (
    <Container>
      <div className="wrapper">
        <Panel className="no-shadow">
          <Skeleton className="bg-skeleton" />
          <span>
            <Skeleton className="avatar-skeleton" />
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </span>
        </Panel>
      </div>
    </Container>
  );
};

export default LoadingProfile;
