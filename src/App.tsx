import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/home';
import ShopPage from './components/pages/shop/';

const App: FC = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
