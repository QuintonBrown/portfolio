import React from 'react';
import './VideoPlayer.css'

const VideoPlayer = () => {
    return (
        <iframe src="/videos/quintonvid.mp4" type="video/mp4" title="Quintons shoutouts" autostart="false"></iframe>
    )
}

export default VideoPlayer