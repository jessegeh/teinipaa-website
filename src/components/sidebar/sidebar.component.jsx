import React from "react";
import ReactPlayer from "react-player";
import '../../sass/main.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className='player-wrapper'>
                <ReactPlayer
                    height='100%'
                    width='100%'
                    className='react-player'
                    url='https://youtu.be/SxZ1Obfk_nU'
                />
            </div>
        </div>
    )
};

export default Sidebar;