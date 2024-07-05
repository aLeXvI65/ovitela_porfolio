import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { pineapple, pineappleHover } from '../assets';
import { projectsGames } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

import { useTranslation, Trans } from 'react-i18next';

import 'react-slideshow-image/dist/styles.css'  
import { Slide } from 'react-slideshow-image';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const GameProject = ( { gameTitle, description, video, videoType, demo, images } ) => {
  const { t, i18n } = useTranslation();

  let env = window.location.toString().includes('localhost') ? 'local' : 'production';
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
      
      {
        (demo) ? 
          <div>
            <button
                className="live-demo flex justify-between 
                sm:text-[18px] text-[16px] text-timberWolf 
                font-bold font-beckman items-center py-5 pl-2 pr-3 
                whitespace-nowrap gap-1 sm:w-[180px] sm:h-[60px] 
                w-[145px] h-[52px] rounded-[10px] glassmorphism 
                sm:mt-[22px] mt-[16px] hover:bg-battleGray 
                hover:text-eerieBlack transition duration-[0.2s] 
                ease-in-out"
                onClick={() => window.open(demo, '_blank')}
                onMouseOver={() => {
                  
                }}
                onMouseOut={() => {
                  
                }}>
                {t('projects.download_demo')}
            </button>
          </div>
        :
          <div></div>
      }

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
          <video className='demo_vid' width="600" height="480" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        )}
      </div>

        {
          (images) ?
            <div className='gallery' >
              {images.map((imageSrc, index) => ( 
                <img src={imageSrc} width='400' alt={'img_'+index} />    
              ))}
            </div>
            // <div className='gallery' >
            //   <Slide>
            //   {images.map((slideImage, index)=> (
            //       <div key={index}>
            //         <div style={{ ...divStyle, 'backgroundImage': `url(${'/src/assets/projects/images/'+gameTitle+'/'+slideImage+'.png'})` }}>
            //           <span style={spanStyle}>{slideImage}</span>
            //         </div>
            //       </div>
            //     ))} 
            //   </Slide>
            // </div>
        :
          <div className='gallery' ></div>
        }
      

    </div>
  );
};

export default GameProject;
