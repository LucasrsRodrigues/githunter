import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import DetailsUser from '../pages/DetailsUser';
import Repository from '../pages/Repository';
import FindUser from '../pages/FindUser';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/user/:name" component={DetailsUser} />
      <Route path="/users" component={FindUser} />
      <Route path="/repository/:repository+" component={Repository} />
    </Switch>
  );
};

export default Routes;
