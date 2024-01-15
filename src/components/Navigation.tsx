import Link from 'next/link'
import React from 'react'

const Navigation = () => {

  const links = [
    'about', 
    'portfolio', 
    'contact'
  ]

  const navItemStyles = 'list-none capitalize hover:text-blue-500 transition-all mx-3 md:mx-6'

  return (
    <nav className='flex justify-center mt-5 absolute w-full'>
      <li className={navItemStyles}>
        <Link href='/'>Home</Link>
      </li>

      {links.map((text, index) => (
        <li key={index} className={navItemStyles}>
          <Link href={`/${text}`}>{text}</Link>
        </li>
      ))}
    </nav>
  )
}

export default Navigation