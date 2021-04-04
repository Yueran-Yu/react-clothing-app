import React from 'react';
import ShopData from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    }
  }

  render() {
    // destructure the collection data
    const {collections} = this.state;
    return (<div className='shop-page'>
          {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
          }
        </div>
    )
  }
}

export default ShopPage;