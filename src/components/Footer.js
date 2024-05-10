import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='w-full text-center bg-slate-950 text-gray-300'>
      <a 
          className='mt-2 py-4'
          href="https://brizuelasideravicius.vercel.app/"
          target="_blank"
          rel="noreferrer"
      >
        Todos los derechos reservados  &copy; {new Date().getFullYear()} Brizuela Sideravicius | Diseño y Desarrollo Web.
      </a>
    </div>
  )
}

export default Footer