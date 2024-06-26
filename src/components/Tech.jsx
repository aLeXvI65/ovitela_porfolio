import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import React, { useEffect, useState } from 'react';

import { useTranslation, Trans } from 'react-i18next';

const Tech = () => {
  const { t, i18n } = useTranslation();
  const [toggleDecals, setToggleDecals] = useState(
    [
    false,false,false,false,false,false,false,
    false,false,false,false,false,false,false,
    false,false
    ]
    );

  const handleMouseDown = (index) => {
    console.log('Mouse down event:', index);
    let newToggles = {
      ...
      toggleDecals
    };
    newToggles[index] = !toggleDecals[index];
    setToggleDecals(newToggles);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{t('tech.my_skills')}</p>
        <h2 className={styles.sectionHeadTextLight}>{t('tech.technologies')}.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28" key={technology.name} onMouseOver={() => handleMouseDown(index)} onMouseLeave={() => handleMouseDown(index)}>
            <BallCanvas icon={technology.icon} infoIcon={technology.infoIcon} toggleDecal={toggleDecals[index]} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
