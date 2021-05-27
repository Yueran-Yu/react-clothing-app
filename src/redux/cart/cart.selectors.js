import {createSelector} from 'reselect';
// import cartItem from "../../components/cart-item/cart-item.component";

// input selector
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0))

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0)
)

// Reading: Redux Selectors: A Quick Tutorial
// Reading: You Might Not Need The mapDispatchToProps Function
//1 connect the component to redux
//2 mapStateToProps
//3 Create the store
//4 Create a reducer
//5 Provide the store to the app
//6 wire up actions