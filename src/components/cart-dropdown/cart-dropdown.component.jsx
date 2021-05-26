import React from 'react';
import CustomerButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem =><CartItem key={cartItem.id} item={cartItem}/>)
        }
      </div>
      <CustomerButton>GO TO CHECKOUT</CustomerButton>
    </div>
)

// by using select we do not need to re-render
// which helps save us on performance

/* const mapStateToProps = ({cart:{cartItems}}) =>({
*    cartItems
* })
*/
const mapStateToProps = state => ({
  cartItems:selectCartItems(state)
})


export default connect(mapStateToProps)(CartDropDown);