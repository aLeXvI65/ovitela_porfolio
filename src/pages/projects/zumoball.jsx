import React from 'react';

import {
    GameProject,
  } from '../../components';

function ZumoBall() {
    return (
        <div>
            <GameProject 
            gameTitle='zumoball' 
            description={'zumoball_desc'} 
            video={'/src/assets/videos/zumoball_gameplay.mp4'}
            videoType={'video'}
            demo={'/src/assets/projects/demos/ZumoBall_Demo_PC.zip'}
            />
        </div>
    );
}

export default ZumoBall;

