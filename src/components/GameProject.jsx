import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { pineapple, pineappleHover } from '../assets';
import { projectsGames } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

import { useTranslation, Trans } from 'react-i18next';


const GameProject = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('projects.games_I_worked')}</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>{t('projects.super_hack_attack')}.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
            {t('projects.super_hack_attack_desc')}
        </motion.p>
      </div>

      <div id="videoPlayer" className='mt-[2rem]'>
        <video width="600" controls>
            <source src="/src/assets/videos/SPH_1_L_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default SectionWrapper(GameProject, 'gameProject');
