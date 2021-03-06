import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from "react-redux";
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../../pages/collection/collection.container'
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";


class ShopPage extends React.Component {
  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const {match} = this.props

    return (
        <div className='shop-page'>
          {/* /shop/:category */}
          < Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
          {/* This makes it more flexible if we want to reuse it in another place! */}
          < Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);
// ShopPage is becoming a simple non-connected component now.
// We will now have the child component of the ShopPage be connected.
