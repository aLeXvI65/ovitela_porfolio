import React from 'react';

import {
    GameProject,
  } from '../../components';

import video from '/src/assets/videos/break_dot_gameplay.mp4';

import img1 from '/src/assets/projects/images/breakdot/1.png';
import img2 from '/src/assets/projects/images/breakdot/2.png';
import img3 from '/src/assets/projects/images/breakdot/3.png';
import img4 from '/src/assets/projects/images/breakdot/4.png';
import img5 from '/src/assets/projects/images/breakdot/5.png';

function BreakDot() {
    
    let env = window.location.toString().includes('localhost') ? 'local' : 'production';

    const images = [img1,img2,img3,img4,img5]

    return (
        <div>
            <GameProject 
            gameTitle='breakdot' 
            description={'breakdot_desc'} 
            video={video}
            videoType={'video'}
            images={images}
            />
        </div>
    );
}

export default BreakDot;

