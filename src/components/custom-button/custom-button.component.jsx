import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, ...othrProps}) => (
    <button className={'custom-button'} {...othrProps}>
        {children}
    </button>
);

export default CustomButton;