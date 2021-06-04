import React from "react";
import './collection.styles.scss';
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({match}) => (
    // match.params.categoryId
    <div className='collection-page'>
      <h2> COLLECTION PAGE</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({

})
export default CollectionPage;
// In our case, Collection
// aligns better with our component tree naming: ShopPage > CollectionPage > CollectionItem




