import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { toggleCartHidden } from '../../redux/actions/cart';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './CardIcon.styles';

interface IProps {
  toggleCartHidden: () => void;
}

const CardIcon: FC<IProps> = ({ toggleCartHidden }): JSX.Element => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>0</ItemCountContainer>
    </CartContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CardIcon);
