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
            video={'/src/assets/videos/SPH_1_L_1.mp4'}
            videoType={'video'}
            />
        </div>
    );
}

export default ZumoBall;

