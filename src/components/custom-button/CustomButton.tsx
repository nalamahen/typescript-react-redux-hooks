import React, { FC } from 'react';

import { CustomButtonContainer } from './CustomButton.styles';

export interface IProps {
  children: string;
  onClick: () => void;
  isGoogleSignIn?: boolean;
}

const CustomButton: FC<IProps> = ({ children, ...props }): JSX.Element => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
