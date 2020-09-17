import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/selectors/shop';

import CollectionPreview from '../collection-preview';
import { ICollection, IGlobalState } from '../../interfaces';

import { CollectionsOverviewContainer } from './CollectionsOverview.styles';

interface IProps {
  collections?: ICollection[];
}

const CollectionOverview: FC<IProps> = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections?.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector<IGlobalState, IProps, any>({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
