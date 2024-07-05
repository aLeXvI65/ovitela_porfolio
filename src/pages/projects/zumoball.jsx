import React from 'react';

import {
    GameProject,
  } from '../../components';

import video from '/src/assets/videos/zumoball_gameplay.mp4';
// import demo from '/src/assets/projects/demos/ZumoBall_Demo_PC.zip';

function ZumoBall() {
    return (
        <div>
            <GameProject 
            gameTitle='zumoball' 
            description={'zumoball_desc'} 
            video={video}
            videoType={'video'}
            demo={'#'}
            />
        </div>
    );
}

export default ZumoBall;

