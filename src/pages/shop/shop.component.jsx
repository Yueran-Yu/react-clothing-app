import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

// ({isLoading, ...otherProps}) in the component below
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const {match, isCollectionFetching} = this.props

    return (
        <div className='shop-page'>
          {/* /shop/:category */}
          < Route exact path={`${match.path}`}
                  render={(props) => <CollectionOverviewWithSpinner er isLoading={isCollectionFetching} {...props}/>}/>
          {/* This makes it more flexible if we want to reuse it in another place! */}
          < Route path={`${match.path}/:collectionId`}
                  render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
        </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
// ShopPage is becoming a simple non-connected component now.
// We will now have the child component of the ShopPage be connected.
