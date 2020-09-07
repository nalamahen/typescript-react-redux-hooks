import React, { FC } from 'react';

import { IItem } from '../../interfaces';
import {
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from './CollectionItem.styles';

const CollectionItem: FC<IItem> = ({ name, price, imageUrl }) => {
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>£{price}</PriceContainer>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
