import React from "react";
import ReactPlayer from "react-player";
import '../../sass/main.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <ReactPlayer
                url="https://youtu.be/WIo32Bk3Cn4"
            />
        </div>
    )
};

export default Sidebar;