import React from 'react';

const BackgroundVideo = (props) => (
    <div className="video-background">
        <video autoPlay loop poster="img/bg3.jpg" src={props.source}>
        </video>
        <div className="video-overlay"></div>
    </div>
);

export default BackgroundVideo;