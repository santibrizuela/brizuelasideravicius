import React from 'react'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/portfolioZetaGroup.png';
import Img2 from '../assets/portfolioDivano3.png';
import Img3 from '../assets/portfolioOrgsach.png';
import Img4 from '../assets/portfolioNetflix.png';
import Img5 from '../assets/portfolioREO.png';
import Img6 from '../assets/portfolioMadero.png';
import Img7 from '../assets/portfolioAmazon.png';
import Img8 from '../assets/portfolioSantibrizuela.png';
import Img9 from '../assets/portfolioCrudauthcart.png';

const ProjectsFull = () => {
  return (
<section className='section my-24' id='projects'>
    <div className='container mx-auto'>
    <div className='grid gap-8'>
        <motion.div 
        variants={fadeIn('right', 0.2)}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col md:grid md:grid-cols-3 gap-3'>
        {/* orgsach */}
        <div className='group relative overflow-hidden border-2 
        border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-30 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img3} 
            alt='img' 
            />
            {/* status */}
            <p className='absolute -bottom-full left-12 
            group-hover:bottom-32 transition-all duration-500 z-30'>
                En Desarrollo
            </p>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-30'>
            <span className='text-gradient'>NextJS y Alojamiento</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-30'>
            <span className='text-3xl text-white uppercase'>org Sach</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-30'>
                <a href='https://orgsach.netlify.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
        </div>
        {/* reo */}
        <div className='group relative overflow-hidden border-2 
        border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-30 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img5} 
            alt='img' 
            />
            {/* status */}
            <p className='absolute -bottom-full left-12 
            group-hover:bottom-32 transition-all duration-500 z-30'>
                Proyecto Online
            </p>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-30'>
            <span className='text-gradient'>Desarrollo de Marca y Web</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-30'>
            <span className='text-3xl text-white uppercase'>REOESTE</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-30'>
                <a href='https://resistenciaselectricasoeste.vercel.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
        </div>
        {/* amazonclon */}
        <div className='group relative overflow-hidden border-2 
        border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-30 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img7} 
            alt='img' 
            />
            {/* status */}
            <p className='absolute -bottom-full left-12 
            group-hover:bottom-32 transition-all duration-500 z-30'>
                En Desarrollo
            </p>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-30'>
            <span className='text-gradient'>Cart & Payment</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-30'>
            <span className='text-3xl text-white uppercase'>Amazon Clon</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-30'>
                <a href='https://rreenext.vercel.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
        </div>
        {/* crudauthcart */}
        <div className='group relative overflow-hidden border-2 
        border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-30 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img9} 
            alt='img' 
            />
            {/* status */}
            <p className='absolute -bottom-full left-12 
            group-hover:bottom-32 transition-all duration-500 z-30'>
                En Desarrollo
            </p>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-30'>
            <span className='text-gradient'>ReactApp, MongoDB, NextJS</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-30'>
            <span className='text-3xl text-white uppercase'>CRUD AUTH CART</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-30'>
                <a href='https://cartauthcrud.netlify.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
        </div>
        {/* santibrizuela */}
        <div className='group relative overflow-hidden border-2 
        border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-30 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img8} 
            alt='img' 
            />
            {/* status */}
            <p className='absolute -bottom-full left-12 
            group-hover:bottom-32 transition-all duration-500 z-30'>
                Plantilla Online
            </p>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-30'>
            <span className='text-gradient'>HTML-CSS-JS</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-30'>
            <span className='text-3xl text-white uppercase'>Landingpage</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-30'>
                <a href='https://santibrizuela.github.io/portfoliolanding/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
        </div>
        {/* divano */}
        <div className='group relative overflow-hidden border-2 
        border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-30 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img2} 
            alt='img' 
            />
            {/* status */}
            <p className='absolute -bottom-full left-12 
            group-hover:bottom-32 transition-all duration-500 z-30'>
                Proyecto Finalizado
            </p>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-30'>
            <span className='text-gradient'>Desarrollo de Marca y Frontend</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-30'>
            <span className='text-3xl text-white uppercase'>Divano</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-30'>
                <a href='https://ferreteria-divano.vercel.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
        </div>
        {/* maderoimprime */}
        <div className='group relative overflow-hidden border-2 
        border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-30 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img6} 
            alt='img' 
            />
            {/* status */}
            <p className='absolute -bottom-full left-12 
            group-hover:bottom-32 transition-all duration-500 z-30'>
                Proyecto Online
            </p>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-30'>
            <span className='text-gradient'>Desarrollo de Marca y Web</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-30'>
            <span className='text-3xl text-white uppercase'>Madero Imprime</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-30'>
                <a href='https://santibrizuela.github.io/madero/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
        </div>
        {/* netflixclon */}
        <div className='group relative overflow-hidden border-2 
        border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-30 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img4} 
            alt='img' 
            />
            {/* status */}
            <p className='absolute -bottom-full left-12 
            group-hover:bottom-32 transition-all duration-500 z-30'>
                EN MANTENIMIENTO
            </p>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-30'>
            <span className='text-gradient'>ReactApp Auth Firebase</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-30'>
            <span className='text-3xl text-white uppercase'>Netflix Clon</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-30'>
                <a href='https://netflix-react-js-f41dc.web.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
        </div>
        {/* zetagroup */}
        <div className='group relative overflow-hidden border-2 
        border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-30 transition-all duration-300'></div>
            {/* img */}
            <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img1} 
            alt='img' 
            />
            {/* status */}
            <p className='absolute -bottom-full left-12 
            group-hover:bottom-32 transition-all duration-500 z-30'>
                Proyecto Entregado
            </p>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-30'>
            <span className='text-gradient'>UI/UX Design NextJS</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-30'>
            <span className='text-3xl text-white uppercase'>Zeta Group</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-30'>
                <a href='https://zgroup-nextjs.vercel.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
        </div>
        </motion.div>
        
        
        
    </div>

    </div>
</section>
  )
}

export default ProjectsFull
