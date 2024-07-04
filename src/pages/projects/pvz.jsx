import React from 'react';

import {
    GameProject,
  } from '../../components';

function PVZ_Demo() {
    return (
        <div>
            <GameProject 
            gameTitle='pvz' 
            description={'pvz_desc'} 
            video={'/src/assets/videos/pvz_gameplay.mp4'}
            videoType={'video'}
            demo={'/src/assets/projects/demos/PlatsVsZombies_Test_PC.zip'}
            />
        </div>
    );
}

export default PVZ_Demo;

