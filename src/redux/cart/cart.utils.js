export const addItemToCart = (cartItems, cartItemstoAdd) => {
    const existingCart = cartItems.find(
        cartItem=> cartItem.productId === cartItemstoAdd.productId
    );

    if(existingCart){
        return cartItems.map(cartItem => 
            cartItem.productId === cartItemstoAdd.productId
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, {...cartItemstoAdd, quantity: 1}];
}

export const removeItem = ( cartItems, toRemoveItem) => {
    const existingCart = cartItems.find(
        cartItem=> cartItem.productId === toRemoveItem.productId
    );

    if(existingCart.quantity === 1){
        return cartItems.filter(item=> item.productId !== toRemoveItem.productId)
    }

    return cartItems.map(item=> item.productId === toRemoveItem.productId ? { ...item, quantity: item.quantity -1}: item)
};