import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/card.component';

import Logo from '../../assets/cassette.jsx';

import '../../sass/main.scss';

const Header = () => (
    <div className='header'>
        <Link className='header header__logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='header header__options'>
            <Link className='header header__options header__options--option' to='/'>
                ALKUUN
            </Link>
            <Link className='header header__options header__options--option' to='/zine'>
                TEINIZINE
            </Link>
            <Link className='header header__options header__options--option' to='/vieraskirja'>
                VIERASKIRJA
            </Link>
            <Link className='header header__options header__options--option' to='/about'>
                LISÄTIETOA
            </Link>
            <Card />
        </div>
    </div>
);

export default Header;