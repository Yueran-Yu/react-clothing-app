import React from 'react';
import CustomerButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from "reselect";
import {withRouter} from 'react-router-dom';

const CartDropDown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
              cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
              : (<div className='empty-message'>Your cart is empty</div>)
        }
      </div>
      <CustomerButton onClick={()=> history.push('./checkout')}>GO TO CHECKOUT</CustomerButton>
    </div>
)

// by using select we do not need to re-render
// which helps save us on performance

/* const mapStateToProps = ({cart:{cartItems}}) =>({
*    cartItems
* })
*/
// const mapStateToProps = state => ({
//   cartItems:selectCartItems(state)
// })
// before using createStructuredSelector

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropDown));