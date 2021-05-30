import React from 'react';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => (
    <div className='shop-page'>
      <CollectionsOverview/>
    </div>
)

export default ShopPage;
// ShopPage is becoming a simple non-connected component now.
// We will now have the child component of the ShopPage be connected.
