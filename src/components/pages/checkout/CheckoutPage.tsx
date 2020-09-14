import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { IGlobalState, IItem } from '../../../interfaces';
import {
  selectCartItems,
  selectCartTotal,
} from '../../../redux/selectors/cart';

import CheckoutItem from '../../checkout-item/CheckoutItem';

import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
} from './CheckoutPage.styles';

interface IProps {
  cartItems: IItem[];
  total: number;
}

const CheckoutPage: FC<IProps> = ({ cartItems, total }): JSX.Element => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer>Total: £{total}</TotalContainer>
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector<IGlobalState, IProps>({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
