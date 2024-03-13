import Link from 'next/link'
import React from 'react'
import * as Icon from 'react-feather';

const Navigation = () => {

  const links = [
    ['About Me', '#AboutMe'],
    ['My Portfolio', '#Portfolio'],
    ['Contact Me', '#Contact']
  ]

  const navItemStyles = 'list-none capitalize transition-all ml-3 md:ml-6 font-black'

  return (
    <div id='Navigation' className='fixed z-40 w-full opacity-0 transition-all delay-500 duration-500'>
      <nav className='mx-auto mt-5 flex w-2/3 justify-between rounded-full border bg-[rgb(255,255,255,0.2)] px-8 py-4 backdrop-blur-lg'>
        <div className="flex">
          <li className={`${navItemStyles} xl:hover:scale-105 transition-all ease-in hover:text-red-600`}>
            <Link className='flex' href='/'>
              <Icon.Home size={24} className='xl:hidden'></Icon.Home>
              <span className='hidden xl:block'>Home</span>
            </Link>
          </li>
          {links.map((link, index) => (
            <div key={index} className={`hidden xl:flex last-of-type:mr-6 ${navItemStyles} xl:hover:scale-105 transition-all ease-in hover:text-red-600`}>
              <Link href={`/${link[1]}`} className=''>{link[0]}</Link>
            </div>
          ))}
        </div>

        <div className="flex">
          <li className={`${navItemStyles} xl:hover:scale-105 transition-all ease-in hover:text-red-600`}>
            <Link className='hover:text-red-600' href='https://www.github.com/SantiagoCode' target="_blank">
              <Icon.GitHub size={24} />
            </Link>
          </li>
          <li className={`${navItemStyles} xl:hover:scale-105 transition-all ease-in hover:text-red-600`}>
            <Link className='hover:text-red-600' href='https://www.linkedin.com/in/santiagocode/' target="_blank">
              <Icon.Linkedin size={24} />
            </Link>
          </li>
        </div>
      </nav>
    </div>
  )
}

export default Navigation