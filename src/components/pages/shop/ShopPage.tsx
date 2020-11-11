import React, { FC, useEffect, useState } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../collections-overview/CollectionsOverview';
import CollectionPage from '../../pages/collection/CollectionPage';
import WithSpinner from '../../with-spinner/WithSpinner';

import { IGlobalState } from '../../../interfaces';

import { fetchCollectionsStart } from '../../../redux/actions/shop';
import {
  selectIsCollectionFetching,
  selectCollectionsLoaded,
} from '../../../redux/selectors/shop';


const CollectonsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectonPageWithSpinner = WithSpinner(CollectionPage);



interface IProps extends RouteComponentProps {
  isCollectionFetching: boolean;
  isCollectionsLoaded: boolean;
  fetchCollectionsStart: Function;
}

const ShopPage: FC<IProps> = ({
  match,
  isCollectionsLoaded,
  fetchCollectionsStart,
}): JSX.Element => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);
  const unsubscribeFromSnapshot = null;

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectonsOverviewWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectonPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  isCollectionFetching: selectIsCollectionFetching(state),
  isCollectionsLoaded: selectCollectionsLoaded(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
