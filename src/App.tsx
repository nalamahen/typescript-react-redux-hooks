// Libs
import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//
import { auth, createUserProfileDocument } from './firebase/firebase-utils';

//actions
import { setCurrentUser } from './redux/actions/user';

// components
import Header from './components/header';
import HomePage from './components/pages/home';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up';
import ShopPage from './components/pages/shop/';

//Styles
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = (props: any): JSX.Element => {
  useEffect(() => {
    const unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          userRef.onSnapshot((snapShot) => {
            props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        }
      }
      props.setCurrentUser(userAuth);
    });

    return () => {
      unsuscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
