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
                    url='https://youtu.be/WIo32Bk3Cn4'
                />
            </div>
        </div>
    )
};

export default Sidebar;