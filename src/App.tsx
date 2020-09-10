// Libs
import React, { FC, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

//
import { auth } from './firebase/firebase-utils';

// components
import Header from './components/header';
import HomePage from './components/pages/home';
import SignIn from './components/sign-in/SignIn';
import ShopPage from './components/pages/shop/';

//Styles
import './App.css';

const App: FC = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const unsuscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }

      console.log('user', user);
    });

    return () => {
      unsuscribeFromAuth();
    };
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
