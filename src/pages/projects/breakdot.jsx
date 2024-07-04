import React from 'react';

import {
    GameProject,
  } from '../../components';

function BreakDot() {
    
    let env = window.location.toString().includes('localhost') ? 'local' : 'production';

    return (
        <div>
            <GameProject 
            gameTitle='breakdot' 
            description={'breakdot_desc'} 
            video={((env === 'production') ? '' : '/src') + '/src/assets/videos/break_dot_gameplay.mp4'}
            videoType={'video'}
            images={['1','2','3','4','5']}
            />
        </div>
    );
}

export default BreakDot;

