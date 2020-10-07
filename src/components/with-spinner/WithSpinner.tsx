import React, { FC } from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

interface withSpinnerProps {
  isLoading: boolean;
}

const withSpinner = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & withSpinnerProps> => ({
  isLoading,
  ...otherProps
}: withSpinnerProps) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...(otherProps as P)} />
  );

export default withSpinner;
