import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import portfolioDivano3 from '../assets/portfolioDivano3.png';
import portfolioOrgsach from '../assets/portfolioOrgsach.png';
import portfolioCe from '../assets/portfolioCePasteleria.png';

const Work = () => {
  return (
  <section className='section my-6' id='work'>
    <div className='container mx-auto'>
      <div className='grid lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='grid lg:grid-cols-2 gap-10 mb-10 lg:mb-0 text-center mx-auto lg:text-start'>
          {/* text */}
          <div>
            
            <h2 className='h2 leading-tight font-bold text-lime-200 mx-auto'>
              <a href='/portfolio' className='text-gradient text-lime-200 w-min'>
                  Servicios <br />
                  Digitales.
              </a>
            </h2>
            
            <p className='max-w-sm text-[1.3rem] font-bold mb-4 mx-auto lg:mx-0'>
              Diseñamos y creamos el <a href='/branding' className='text-gradient text-lime-200'>Logo</a> de 
              tu marca. Desarrollamos su <a href='/webdevelopment' className='text-gradient text-lime-200'>Sitio Web</a>, 
              perfiles en <a href='/marketing' className='text-gradient text-lime-200'>Redes Sociales</a> y 
              estrategias de <a href='/marketing' className='text-gradient text-lime-200'>Marketing</a>.
            </p>
            <a href='/portfolio'>
              <button className='btn btn-sm'>Ver Proyectos</button>
            </a>
            
          </div>
          {/* ORGSACH */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='scale-100 group-hover:scale-150 transition-all duration-500' 
              src={portfolioOrgsach} 
              alt='Organización Sach' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Diseño y Desarrollo Web</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>ORG SACH</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-50'>
                <a href='https://orgsach.netlify.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='grid md:grid-cols-2 gap-16 mt-2'>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='scale-125 group-hover:scale-150 transition-all duration-500' 
              src={portfolioDivano3} 
              alt='Ferretería Divano' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Desarrollo de Marca y Frontend</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>DIVANO</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-50'>
                <a href='https://ferreteria-divano.vercel.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='scale-125 group-hover:scale-150 transition-all duration-500' 
              src={portfolioCe} 
              alt='Ce Pastelería' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Diseño Gráfico</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Ce Pastelería</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-50'>
                <a href='https://www.instagram.com/ce_pasteleriaa/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  </section>
  );
};

export default Work;
