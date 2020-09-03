// Libs
import React, { FC } from 'react';

// Components
import MenuItem from '../../menu-item/';
import Directory from '../../directory';

// Styles
import { Main } from './styles';

const HomePage: FC = () => {
  return (
    <Main>
      <Directory />
    </Main>
  );
};

export default HomePage;
