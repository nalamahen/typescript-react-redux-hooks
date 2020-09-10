// Libs
import React, { FC, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//
import { auth, createUserProfileDocument } from './firebase/firebase-utils';

// components
import Header from './components/header';
import HomePage from './components/pages/home';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up';
import ShopPage from './components/pages/shop/';

//Styles
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        }
      }
      setCurrentUser(userAuth);
    });

    return () => {
      unsuscribeFromAuth();
    };
  }, []);

  console.log('currentUser:', currentUser);

  return (
    <div>
      <Header currentUser={currentUser} />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default App;
