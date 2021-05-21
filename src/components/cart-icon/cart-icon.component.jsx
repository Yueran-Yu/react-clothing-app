import React from 'react'
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.component.scss';

const CartIcon = ({itemsCount, toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemsCount}</span>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) =>({
  itemsCount: cartItems.reduce((totalItems,cartItem)=> totalItems+cartItem.quantity,0)
})


const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);