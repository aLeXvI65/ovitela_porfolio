import React from 'react';

import {
    GameProject,
  } from '../../components';

function BreakDot() {
    return (
        <div>
            <GameProject 
            gameTitle='breakdot' 
            description={'breakdot_desc'} 
            video={'https://www.youtube.com/embed/gZBLx_ptKro'}
            videoType={'youtube'}
            />
        </div>
    );
}

export default BreakDot;

