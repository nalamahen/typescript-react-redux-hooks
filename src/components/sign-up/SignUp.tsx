import React, { useState, FC } from 'react';
import { toast } from 'react-toastify';

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import { SignUpContainer, SignUpTitle } from './SignUp.styles';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';

interface ISignUp {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: FC = () => {
  const [signupValues, setSignupValues] = useState<ISignUp>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('signup form submit......');
    const { displayName, email, password, confirmPassword } = signupValues;

    if (password !== confirmPassword) {
      toast.error("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        confirmPassword
      );

      await createUserProfileDocument(user, { displayName });

      setSignupValues({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSignupValues({ ...signupValues, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={signupValues.displayName}
          handleChange={handleChange}
          label="Name"
        />
        <FormInput
          type="text"
          name="email"
          value={signupValues.email}
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={signupValues.password}
          handleChange={handleChange}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={signupValues.confirmPassword}
          handleChange={handleChange}
          label="Password"
        />
        <CustomButton onClick={() => handleSubmit}>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
