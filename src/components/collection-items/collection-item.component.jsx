import React from 'react';

import './collection-item.styles.scss';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem }) => {
    const { productName, price, searchImage } = item;
    return (
        <div className='collection-item'>
            <div className= 'image' style={{backgroundImage: `url(${searchImage})`}}>
            <div className= 'price-tag'>Price: Rs.{price}</div>
            </div>
            <div className='collection-footer'>
                <span className='name'>{productName}</span>
            </div>
            <CustomButton onClick={()=> addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);