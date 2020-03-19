import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/cassette.jsx';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/zine'>
                TEINIZINE
            </Link>
            <Link className='option' to='/vieraskirja'>
                VIERASKIRJA
            </Link>
            <Link className='option' to='/about'>
                LISÄTIETOA
            </Link>
        </div>
    </div>
);

export default Header;