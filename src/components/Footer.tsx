import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between bg-black h-96 w-full px-4'>
      <Contact />
      <Copyright />
    </div>
  )
}

const Contact = () => {
  
  return (
    <div className='container mx-auto mt-20 flex flex-col'>
      <h1 className="title text-2xl font-bold mb-16">Contact me wherever u want</h1>
      <div className="flex justify-around">
        <Link href={"https://www.linkedin.com/in/santiagocode/"} className="hover:scale-105 transition-all">
          <h3 className="flex text-lg font-bold text-ms items-center">
            <Icon.Linkedin size={32} className='mr-3' />
            <p className='hidden lg:block'>LinkedIn</p>
          </h3>
        </Link>
        <a href="mailto:santiagosalazar.dev@gmail.com" className="hover:scale-105 transition-all">
          <h3 className="flex text-lg font-bold text-ms items-center">
            <Icon.Mail size={32} className='mr-3' />
            <p className='hidden lg:block'>Mail</p>
          </h3>
        </a>
        <a href={"https://wa.me/04123275955"} className="hover:scale-105 transition-all">
          <h3 className="flex text-lg font-bold text-ms items-center">
            <Icon.Phone size={32} className='mr-3' />
            <p className='hidden lg:block'>Phone</p>
          </h3>
        </a>
        <Link href={"https://github.com/SantiagoCode"} className="hover:scale-105 transition-all">
          <h3 className="flex text-lg font-bold text-ms items-center">
            <Icon.GitHub size={32} className='mr-3' />
            <p className='hidden lg:block'>Github</p>
          </h3>
        </Link>
      </div>
    </div>
  )
}

const Copyright = () => {
  
  return (
    <div className='flex flex-col text-center justify-center py-3'>
      <Link href={'https://github.com/SantiagoCode/Portfolio'}
            className='text-ms mb-1 text-violet-400 font-bold'>
        Echale un vistazo al codigo de este portafolio en mi GitHub 👋
      </Link>
      <div className='text-xs'>Copyright © 2024 - Santiago Salazar Dev</div>
    </div>
  )
}

export default Footer