import {connect} from 'react-redux';
import {compose} from 'redux'

import {selectIsCollectionFetching} from "../../redux/selectors/shop"
import withSpinner from '../with-spinner/WithSpinner';
import CollectionOverview from './CollectionsOverview';
import {IGlobalState} from '../../interfaces'

interface IProps {
    isLoading: boolean;
}
 const mapStateToProps = (state: IGlobalState) => ({
     isLoading: selectIsCollectionFetching(state)
 })

 const CollectionsOverviewContainer = compose(
     connect(mapStateToProps),
     withSpinner,    
 )(CollectionOverview)

 export default CollectionsOverviewContainer;
