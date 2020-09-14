import React, { FC } from 'react';

import { IItem } from '../../interfaces';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './CheckoutItem.styles';

interface IProps {
  cartItem: IItem;
}

const CheckoutItem: FC<IProps> = ({
  cartItem: { name, imageUrl, price, quantity },
}) => {
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={''} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>{quantity}</QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
