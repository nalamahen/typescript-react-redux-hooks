import React, { FC } from 'react';
import { connect } from 'react-redux';

import { IGlobalState, IItem } from '../../interfaces';

import CartItem from '../cart-item/CartItem';

import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer,
} from './CartDropdown.styles';

interface IProps {
  cartItems: IItem[];
}

const CartDropdown: FC<IProps> = ({ cartItems }): JSX.Element => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </CartItemsContainer>
      <CartDropdownButton onClick={() => alert('got to checkout')}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = ({ cart: { cartItems } }: IGlobalState) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
