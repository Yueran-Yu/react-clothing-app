// utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location
// cartItems is an array

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

  if (existingCartItem) {
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
    )
  }

  // quantity property gets attached the first time around since this if block (if(existingCartItem){}...)won't run when it's a new item!
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  } else {
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {
      ...cartItem,
      quantity: cartItem.quantity - 1
    } : cartItem)
  }
}

/**
 * const addItemToCart = (cartItems, cartItemToAdd) => {
 *  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
 * }
 *
 */