import React, { FC } from 'react';

import SignIn from '../../sign-in';
import SignUp from '../../sign-up';

import { SignInAndSignUpContainer } from './SignInAndSignUp.styles';

const SignInAndSignUp: FC = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;
