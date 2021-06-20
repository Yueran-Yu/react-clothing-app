import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {updateCollections} from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {

    const {updateCollections} = this.props
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })
  }

  render() {
    const {match} = this.props
    return (
        <div className='shop-page'>
          {/* /shop/:category */}
          < Route exact path={`${match.path}`} component={CollectionsOverview}/>
          {/* This makes it more flexible if we want to reuse it in another place! */}
          < Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
// ShopPage is becoming a simple non-connected component now.
// We will now have the child component of the ShopPage be connected.
