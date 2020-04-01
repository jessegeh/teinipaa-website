import React from 'react';

import '../../sass/main.scss';

const Backdrop = props => (
    <div className='backdrop' onClick={props.click}></div>
);

export default Backdrop;