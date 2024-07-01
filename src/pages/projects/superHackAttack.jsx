import React from 'react';

import {
    GameProject
  } from '../../components';

const SuperHackAttack = () => {

    console.log("Sending game title: "+gameTitle);

    return (
        <div>
            <GameProject 
            gameTitle={'super_hack_attack'} 
            description={'super_hack_attack_desc'} 
            video={'/src/assets/videos/SPH_1_L_1.mp4'}
            videoType={'video'} />
        </div>
    );
};

export default SuperHackAttack;

