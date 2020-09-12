import React, { FC } from 'react';

import { IItem } from '../../interfaces';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from './CartItem.styles';

const CartItem: FC<IItem> = ({ imageUrl, price, name, quantity }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x £{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
