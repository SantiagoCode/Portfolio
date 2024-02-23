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

function Contact() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in touch</h2>
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">Reach out to start a conversation.</p>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-4 md:gap-8">
          <div className="flex items-center justify-center space-x-2">
            <Link className='flex items-center flex-col' href={"https://www.linkedin.com/in/santiagocode/"}>
              <LinkedinIcon className="h-6 w-6" />
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <a className='flex items-center flex-col' href={"mailto:santiagosalazar.dev@gmail.com"}>
              <MailIcon className="h-6 w-6" />
              <span className="text-sm font-medium">Mail</span>
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <a className='flex items-center flex-col' href={"https://wa.me/04123275955"}>
              <SmartphoneIcon className="h-6 w-6" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Link className='flex items-center flex-col' href={"https://www.github.com/SantiagoCode"}>
              <GithubIcon className="h-6 w-6" />
              <span className="text-sm font-medium">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function SmartphoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
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