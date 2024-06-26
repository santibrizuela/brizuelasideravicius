import React from 'react';
// images
import Image from '../assets/logoV.png';
// icons
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
const Banner = () => {
  return (
  <section 
    className='min-h-[100vh] flex items-center' 
    id='home'
  >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left lg:justify-start'>
          <motion.h1 
            variants={fadeIn('down', 0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[40px] font-bold mx-auto lg:mx-0 text-lime-200 leading-[0.8] md:text-[55px] w-min'
            >
            <a href='/' className='font-bold'>BRIZUELA<br/> <span>SIDERAVICIUS</span></a>
          </motion.h1>
          <motion.div 
             variants={fadeIn('down', 0.4)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
             className='mb-6 mt-2 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
          >
            <span className='text-lime-100 mr-4'>
              <TypeAnimation sequence={[
                'Diseño',
                2000,
                'Desarrollo',
                2000,              
                'Marketing',
                2000,
                'Soporte',
                2000
              ]} 
              speed={50}
              wrapper='span'
              repeat={Infinity}
              />          
            </span>
              
          </motion.div>
          <motion.p
             variants={fadeIn('up', 0.5)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
             className='mb-8 max-w-lg mx-auto lg:mx-0'
          >
            Digitalizamos tu marca. Te potenciamos en el mundo digital 
            utilizando <a href='/branding' className='font-bold'>Diseño Gráfico</a>, <a href='/webdevelopment' className='font-bold'>Desarrollo Web</a> y <a href='/marketing' className='font-bold'>Marketing Digital</a>.
          </motion.p>
          <motion.div 
             variants={fadeIn('up', 0.6)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
             className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
          >
            <a href='https://wa.link/1q16ii'>
              <button className='btn btn-lg'>
                Contactanos
              </button>
            </a>
            
            <a href='/portfolio' className='text-gradient text-lime-200 btn-link'>
              Ver Portfolio
            </a>
          </motion.div>
          {/* socials */}
          <motion.div 
             variants={fadeIn('up', 0.7)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}}
             className='flex text-4xl gap-x-6 max-w-max mx-auto lg:mx-0'
          >
            <a href='https://www.instagram.com/digitalizamostumarca/' target='_blank' rel='noreferrer'>
              <FaInstagram className='icon-color'/>
            </a>
            <a href='https://github.com/santibrizuela' target='_blank' rel='noreferrer'>
              <FaGithub className='icon-color'/>
            </a>
            <a href='https://ar.linkedin.com/company/brizuela-sideravicius' target='_blank' rel='noreferrer'>
              <FaLinkedin className='icon-color'/>
            </a>
            <a href='https://wa.link/1q16ii' target='_blank' rel='noreferrer'>
              <FaWhatsapp className='icon-color'/>
            </a>
          </motion.div>
        </div>
        {/* image */}
        <motion.div 
           variants={fadeIn('down', 0.5)} 
           initial="hidden" 
           whileInView={'show'} 
           className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
        >
          <img src={Image} alt='Banner' className='rounded-xl'/>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
