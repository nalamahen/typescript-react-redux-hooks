import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IItem } from '../../interfaces';
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/actions/cart';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './CheckoutItem.styles';

interface IProps {
  cartItem: IItem;
  clearItem: Function;
  addItem: Function;
  removeItem: Function;
}

const CheckoutItem: FC<IProps> = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={''} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>£{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: IItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: IItem) => dispatch(addItem(item)),
  removeItem: (item: IItem) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
