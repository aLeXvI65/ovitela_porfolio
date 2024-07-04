import React from 'react';

import {
    GameProject
  } from '../../components';

const SuperHackAttack = () => {

    return (
        <div>
            <GameProject 
            gameTitle={'super_hack_attack'} 
            description={'super_hack_attack_desc'} 
            video={ ((process.env.NODE_ENV === 'production') ? '' : '/src') + '/assets/videos/SPH_1_L_1.mp4'}
            videoType={'video'} />
        </div>
    );
};

export default SuperHackAttack;

