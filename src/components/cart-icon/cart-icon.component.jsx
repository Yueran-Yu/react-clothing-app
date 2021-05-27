import React from 'react'
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.component.scss';
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({itemsCount, toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemsCount}</span>
    </div>
)

// const mapStateToProps = state => ({
//   // itemsCount: cartItems.reduce((totalQuantity,cartItem.quantity)=>totalQuantity+cartItem , 0)
//   itemsCount: selectCartItemsCount(state)
// })

const mapStateToProps = createStructuredSelector({
  // itemsCount: cartItems.reduce((totalQuantity,cartItem.quantity)=>totalQuantity+cartItem , 0)
  itemsCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// notice how as we code along we are making small changes to the app and refactoring our code
