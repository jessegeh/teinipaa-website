import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../sidedrawer/drawertoggle.component'

import '../../sass/main.scss';

const Toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='toolbar__logo'><Link className='toolbar__link' to='/'>THE LOGO</Link></div>
            <div className='logo-space'></div>
            <div className='toolbar_navigation-items'>
                <ul>
                    <li><Link className='header__items' to='/'>ALKUUN</Link></li>
                    <li><Link className='header__items' to='/zine'>TEINIZINE</Link></li>
                    <li><Link className='header__items' to='/vieraskirja'>VIERASKIRJA</Link></li>
                    <li><Link className='header__items' to='/about'>LISÄTIETOA</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;