import React from 'react';

import {
    GameProject
  } from '../../components';



  import { videos } from '../../constants';

  

const SuperHackAttack = () => {

    let env = window.location.toString().includes('localhost') ? 'local' : 'production';
    console.log("sitio: "+window.location);
    console.log("env: "+env);
    
    return (
        <div>
            <GameProject 
            gameTitle={'super_hack_attack'} 
            description={'super_hack_attack_desc'} 
            video={videos.hackVideo}
            videoType={'video'} />
        </div>
    );
};

export default SuperHackAttack;

