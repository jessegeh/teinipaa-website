import React from 'react';

import '../../sass/main.scss';

const DrawerToggleButton = props => (
    <button className='toggle-button'>
        <div className='toggle-button__line' />
        <div className='toggle-button__line'/>
        <div className='toggle-button__line'/>
    </button>
);

export default DrawerToggleButton;