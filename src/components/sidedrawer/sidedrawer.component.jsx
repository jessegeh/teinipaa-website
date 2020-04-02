import React from 'react';
import { Link } from 'react-router-dom';

import '../../sass/main.scss';

const Sidedrawer = props => {
    let drawerClasses = 'sidedrawer';
    if (props.show) {
        drawerClasses = 'sidedrawer open'
    }

    return (<nav className={drawerClasses}>
        <ul>
            <li><Link onClick={props.drawerClickHandler} className='sidedrawer-link' to='/'>ALKUUN</Link></li>
            <li><Link onClick={props.drawerClickHandler} className='sidedrawer-link' to='/zine'>TEINIZINE</Link></li>
            <li><Link onClick={props.drawerClickHandler} className='sidedrawer-link' to='/vieraskirja'>VIERASKIRJA</Link></li>
            <li><Link onClick={props.drawerClickHandler} className='sidedrawer-link' to='/about'>LISÄTIETOA</Link></li>
        </ul>
    </nav>
    );
};

export default Sidedrawer;