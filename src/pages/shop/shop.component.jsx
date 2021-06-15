import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";


const ShopPage = ({match}) => {
  return (
      <div className='shop-page'>
        {/* /shop/:category */}
        < Route exact path={`${match.path}`} component={CollectionsOverview}/>
        {/* This makes it more flexible if we want to reuse it in another place! */}
        < Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
  )
}

export default ShopPage;
// ShopPage is becoming a simple non-connected component now.
// We will now have the child component of the ShopPage be connected.
