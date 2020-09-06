// Libs
import React, { FC } from 'react';

// Components
import Directory from '../../directory';

// Styles
import { Main } from './HomePage.styles';

const HomePage: FC = (): JSX.Element => {
  return (
    <Main>
      <Directory />
    </Main>
  );
};

export default HomePage;
