import React from 'react';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from 'react-router-dom';
import CategoryPage from "../category/category.component";

const ShopPage = ({match}) => {
  console.log(match)
  return (
      <div className='shop-page'>
        {/* /shop/:category */}
        < Route exact path={`${match.path}`} component={CollectionsOverview}/>
        {/* This makes it more flexible if we want to reuse it in another place! */}
        < Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
      </div>
  )
}

export default ShopPage;
// ShopPage is becoming a simple non-connected component now.
// We will now have the child component of the ShopPage be connected.
