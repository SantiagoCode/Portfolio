import Link from 'next/link'
import React from 'react'
import * as Icon from 'react-feather';

const Navigation = () => {

  const links = [
    ['About Me', '#AboutMe'],
    ['My Portfolio', '#Portfolio'],
    ['Contact Me', '#Contact']
  ]

  const navItemStyles = 'list-none capitalize hover:text-blue-500 transition-all ml-3 md:ml-6'

  return (
    <nav className='flex justify-center mt-5 absolute w-full'>
      <li className={`${navItemStyles} hover:scale-105 transition-all ease-in hover:text-cyan-200`}>
        <Link className='flex' href='/'>
          <Icon.Home size={24} className='xl:hidden'></Icon.Home>
          <span className='hidden xl:block'>Home</span>
        </Link>
      </li>

      {links.map((link, index) => (
        <div key={index} className={`hidden xl:flex last-of-type:mr-6 ${navItemStyles} hover:scale-105 transition-all ease-in hover:text-cyan-200`}>
          <Link href={`/${link[1]}`} className=''>{link[0]}</Link>
        </div>
      ))}
      <li className={`${navItemStyles} hover:scale-105 transition-all ease-in hover:text-cyan-200`}>
        <Link className='hover:text-cyan-200' href='https://www.github.com/SantiagoCode'>
          <Icon.GitHub size={24} />
        </Link>
      </li>
      <li className={`${navItemStyles} hover:scale-105 transition-all ease-in hover:text-cyan-200`}>
        <Link className='hover:text-cyan-200' href='https://www.linkedin.com/in/santiagocode/'>
          <Icon.Linkedin size={24} />
        </Link>
      </li>
    </nav>
  )
}

export default Navigation