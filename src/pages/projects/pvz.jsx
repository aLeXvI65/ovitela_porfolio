import React from 'react';

import {
    GameProject,
  } from '../../components';

// import demo from '/src/assets/projects/demos/PlatsVsZombies_Test_PC.zip';
import video from '/src/assets/videos/pvz_gameplay.mp4';

function PVZ_Demo() {

    let env = window.location.toString().includes('localhost') ? 'local' : 'production';

    return (
        <div>
            <GameProject 
            gameTitle='pvz' 
            description={'pvz_desc'} 
            video={video}
            videoType={'video'}
            demo={'PlatsVsZombies_Test_PC_apcei3192'}
            />
        </div>
    );
}

export default PVZ_Demo;

