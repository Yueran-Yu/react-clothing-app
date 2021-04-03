import React from 'react';
import ShopData from './shop.data.js';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    }
  }

  render(){
    return <div>SHOP PAGES</div>
  }
}

export default ShopPage;