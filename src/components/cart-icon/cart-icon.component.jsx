import { React } from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { withRouter } from 'react-router-dom';
import './cart-icon.styles.scss';

const CartIcon= ({itemCount , history})=>(
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={()=> history.push('/checkout')}/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps =state=>({
    itemCount: selectCartItemsCount(state)
})

export default withRouter(connect(mapStateToProps)(CartIcon));