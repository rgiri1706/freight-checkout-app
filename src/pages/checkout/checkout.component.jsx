import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItem , selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { withRouter } from 'react-router-dom';

import './checkout.styles.scss';

const CheckoutPage =({cartItems, total, history})=>(
    <div>
        <div className="back-button" onClick={()=> history.goBack()}>
            &larr;  Go back
        </div>
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem,index)=> <CheckoutItem key={index} cartItem = {cartItem} />)
            }
            <div className='total'>
                    Total: ₹{total}
            </div>
        </div>
    </div>
);

const mapStateToProps= createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));