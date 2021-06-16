import React from 'react';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <Link to="/" className="head-name">
            FreightAssignment
        </Link>
        <div className="options">
             <CartIcon />
        </div>
    </div>
)

export default Header;
