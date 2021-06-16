import { addItemToCart , removeItem } from './cart.utils';

const INITIAL_STATE = {
    cartItems: [],
    loadedItems: []
};

const cartReducer =(state= INITIAL_STATE, action)=>{
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case 'LOAD_ITEM':
            return {
                ...state,
                loadedItems: action.payload
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter(item=> item.productId  !== action.payload.productId)
            };    
        default:
            return state;   
    }
}

export default cartReducer;