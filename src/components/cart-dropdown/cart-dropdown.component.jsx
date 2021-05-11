import React from 'react';
import CustomerButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomerButton>GO TO CHECKOUT</CustomerButton>
    </div>
)
export default CartDropDown;