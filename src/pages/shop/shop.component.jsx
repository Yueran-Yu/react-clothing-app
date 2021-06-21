import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";


// ({isLoading, ...otherProps}) in the component below
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  // constructor(props){
  //   super(props)
  //
  //   this.state = {
  //     loading: true
  //   }
  // }

  // this is the simplified way, so we don't have to write constructor() and super() every time
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const {updateCollections} = this.props
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({loading: false})
    })
  }

  render() {
    const {match} = this.props
    const {loading} = this.state
    return (
        <div className='shop-page'>
          {/* /shop/:category */}
          < Route exact path={`${match.path}`}
                  render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
          {/* This makes it more flexible if we want to reuse it in another place! */}
          < Route path={`${match.path}/:collectionId`}
                  render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
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
