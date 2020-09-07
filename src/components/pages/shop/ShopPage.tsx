import React, { FC, useState } from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../collection-preview';

const ShopPage: FC = (): JSX.Element => {
  const initialCollections = SHOP_DATA;

  const [collections, setCollections] = useState(initialCollections);

  return (
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
