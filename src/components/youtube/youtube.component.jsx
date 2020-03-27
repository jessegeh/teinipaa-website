import React from "react";
import ReactPlayer from "react-player";
import '../../sass/main.scss';

function Youtube() {
    return (
        <div>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    width='100%'
                    height='100%'
                    url='https://youtu.be/CJQJ9SeXSA8'
                />
            </div>
        </div>
    )
};

export default Youtube;