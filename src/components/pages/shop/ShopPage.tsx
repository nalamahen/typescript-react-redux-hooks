import React, { FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionsOverview from '../../collections-overview/CollectionsOverview';
import CollectionPage from '../../pages/collection/CollectionPage';

interface IProps extends RouteComponentProps {}

const ShopPage: FC<IProps> = ({ match }): JSX.Element => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
