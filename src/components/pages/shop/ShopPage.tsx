import React, { FC, useEffect, useState } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../../redux/actions/shop';

import CollectionsOverview from '../../collections-overview/CollectionsOverview';
import CollectionPage from '../../pages/collection/CollectionPage';
import WithSpinner from '../../with-spinner/WithSpinner';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../../firebase/firebase-utils';

import { ICollection } from '../../../interfaces';

const CollectonsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectonPageWithSpinner = WithSpinner(CollectionPage);

interface IProps extends RouteComponentProps {
  updateCollections: Function;
}

const ShopPage: FC<IProps> = ({ match, updateCollections }): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  const unsubscribeFromSnapshot = null;
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectonsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectonPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collectionsMap: ICollection[]) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
