import React from "react";
import './collection.styles.scss';
import CollectionItem from "../../components/collection-item/collection-item.component.jsx";
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selector.js";

const CollectionPage = ({collection}) => {
  console.log(collection)
  return (
      // match.params.categoryId
      <div className='collection-page'>
        <h2> COLLECTION PAGE</h2>
      </div>
  )

}

// ownProps come from the component
// This is necessary because unlike other selectors, this selector needs a part of the state depending on the URL parameter!
const mapStateToProps = (state, ownProps) => ({
  // curried function
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);
// In our case, Collection
// aligns better with our component tree naming: ShopPage > CollectionPage > CollectionItem




