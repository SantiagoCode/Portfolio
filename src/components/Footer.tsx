import React from 'react'
import Link from 'next/link'

const Footer = () => {
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