import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { pineapple, pineappleHover } from '../assets';
import { projectsGames } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

import { useTranslation, Trans } from 'react-i18next';


const GameProject = ( { gameTitle, description, video, videoType } ) => {
  const { t, i18n } = useTranslation();

  // console.log("props: "+JSON.stringify(props));
  console.log("title: "+gameTitle);

  return (
    <div className="mt-[10rem] ml-[5rem] mb-[15rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('projects.games_I_worked')}</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>{t('projects.'+gameTitle)}.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
            {t('projects.'+description)}
        </motion.p>
      </div>

      <div id="videoPlayer" className='mt-[2rem]'>
        { (videoType === 'youtube') ? (
          <div>
            <iframe 
              width="560" 
              height="315" 
              src={video} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        ) : (
          <video width="600" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        )}
        
      </div>

    </div>
  );
};

export default GameProject;
