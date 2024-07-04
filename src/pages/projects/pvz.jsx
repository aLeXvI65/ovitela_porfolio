import React from 'react';

import {
    GameProject,
  } from '../../components';

function PVZ_Demo() {

    let env = window.location.toString().includes('localhost') ? 'local' : 'production';

    return (
        <div>
            <GameProject 
            gameTitle='pvz' 
            description={'pvz_desc'} 
            video={'/src/assets/videos/pvz_gameplay.mp4'}
            videoType={'video'}
            demo={((env === 'production') ? '' : '/src') + '/src/assets/projects/demos/PlatsVsZombies_Test_PC.zip'}
            />
        </div>
    );
}

export default PVZ_Demo;

