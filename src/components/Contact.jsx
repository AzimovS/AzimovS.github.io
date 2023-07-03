import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p className='sm:text-[18px] text-[14px] text-secondary tracking-wider'>
          Email:{' '}
          <a href='mailto:sherkhanazim@gmail.com'>sherkhanazim@gmail.com</a>
        </p>

        <div
          className='flex flex-row flex-wrap mt-5
           gap-10'
        >
          <div
            onClick={() => window.open('https://github.com/AzimovS', '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <FaGithub className='w-5 h-5 md:w-5 md:h-5' />
          </div>
          <div
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/sherkhanazimov/',
                '_blank'
              )
            }
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <FaLinkedin className='w-5 h-5 md:w-5 md:h-5' />
          </div>
          <div
            onClick={() =>
              window.open('https://twitter.com/azimov92612285', '_blank')
            }
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <FaTwitter className='w-5 h-5 md:w-5 md:h-5' />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
