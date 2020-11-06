import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/user/:name" component={Details} />
    </Switch>
  );
};

export default Routes;
