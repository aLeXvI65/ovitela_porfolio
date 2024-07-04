import React from 'react';

import {
    GameProject
  } from '../../components';

  import { Values } from '../../constants';

const SuperHackAttack = () => {

    console.log("env: "+Values.env);

    return (
        <div>
            <GameProject 
            gameTitle={'super_hack_attack'} 
            description={'super_hack_attack_desc'} 
            video={ ((Values.env === 'production') ? '' : '/src') + '/assets/videos/Hack_Demo.mp4'}
            videoType={'video'} />
        </div>
    );
};

export default SuperHackAttack;

