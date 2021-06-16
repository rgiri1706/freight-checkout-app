import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { deleteItem , addItem, removeItem } from '../../redux/cart/cart.actions'; 

const CheckoutItem = ({ cartItem , clearItem, addItem, removeItem}) => {
    const { productName , searchImage, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={searchImage} alt='item' />
            </div>
            <span className='name'>{productName}</span>
            <span className='quantity'><div className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</div><span className='value'>{quantity}</span><div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div></span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(deleteItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);