import Link from 'next/link'
import React from 'react'
import * as Icon from 'react-feather';

const Navigation = () => {

  const links = [
    ['About Me', '#AboutMe'],
    ['My Portfolio', '#Portfolio'],
    ['Contact Me', '#Contact']
  ]

  const navItemStyles = 'list-none capitalize hover:text-blue-500 transition-all mx-3 md:mx-6'

  return (
    <nav className='flex justify-center mt-5 absolute w-full'>
      <li className={navItemStyles}>
        <Link href='/'>Home</Link>
      </li>

      {links.map((link, index) => (
        <li key={index} className={navItemStyles}>
          <Link href={`/${link[1]}`}>{link[0]}</Link>
        </li>
      ))}
      <li className={`${navItemStyles} pl-6`}>
        <Link href='https://www.github.com/SantiagoCode'>
          <Icon.GitHub size={24} />
        </Link>
      </li>
      <li className={navItemStyles}>
        <Link href='https://www.linkedin.com/in/santiagocode/'>
          <Icon.Linkedin size={24} />
        </Link>
      </li>
    </nav>
  )
}

export default Navigation