import React, { FC, useState } from 'react';

import { signInWithGoogle } from '../../firebase/firebase-utils';

import FormInput from '../form-input/FormInout';
import CustomButton from '../custom-button/CustomButton';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './SignIn.styles';

interface ILogin {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const [login, setLogin] = useState<ILogin>({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handle submit ......');
    setLogin({ email: '', password: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLogin({ ...login, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          value={login.email}
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={login.password}
          handleChange={handleChange}
          label="Password"
        />
        <ButtonsBarContainer>
          <CustomButton onClick={() => handleSubmit}>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Goolge
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
