import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IItem } from '../../interfaces';
import { addItem } from '../../redux/actions/cart';

import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from './CollectionItem.styles';

interface IProps {
  item: IItem;
  addItem: Function;
}

const CollectionItem: FC<IProps> = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>£{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        onClick={() => {
          addItem(item);
        }}
      >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: IItem) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
