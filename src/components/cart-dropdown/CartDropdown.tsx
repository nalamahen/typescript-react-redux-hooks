import React, { FC } from 'react';
import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer,
} from './CartDropdown.styles';

const CartDropdown: FC = (): JSX.Element => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>000</CartItemsContainer>
      <CartDropdownButton onClick={() => alert('got to checkout')}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
