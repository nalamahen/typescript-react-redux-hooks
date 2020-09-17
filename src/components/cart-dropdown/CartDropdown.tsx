import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { IGlobalState, IItem } from '../../interfaces';
import { selectCartItems } from '../../redux/selectors/cart';

import { toggleCartHidden } from '../../redux/actions/cart';

import CartItem from '../cart-item/CartItem';

import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer,
} from './CartDropdown.styles';

interface IProps extends RouteComponentProps {
  cartItems: IItem[];
  dispatch: Dispatch;
}

const CartDropdown: FC<IProps> = ({
  cartItems,
  history,
  dispatch,
}): JSX.Element => {
  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItemsContainer>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </CartItemsContainer>
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
