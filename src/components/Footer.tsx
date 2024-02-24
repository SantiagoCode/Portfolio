import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between bg-black h-96 w-full px-4'>
      <ContactSection />
      <Copyright />
    </div>
  )
}

const NetworkLink = ({ children, linkDirection, network }: { children: React.ReactNode, linkDirection: string, network: string }) => {
  return (
    <div className="flex items-center justify-center space-x-2 hover:scale-105 transition-all ease-in hover:text-cyan-200">
      <a className='flex items-center flex-col' href={linkDirection}>
        {children}
        <span className="text-sm font-medium">{network}</span>
      </a>
    </div>
  )
}

function ContactSection() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in touch</h2>
          <p className="text-cyan-200 md:text-xl/relaxed">Reach out to start a conversation.</p>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-4 md:gap-8">
          <NetworkLink linkDirection='https://www.linkedin.com/in/santiagocode/' network='LinkedIn' >
            <Icon.Linkedin size={26} />
          </NetworkLink>
          <NetworkLink linkDirection='mailto:santiagosalazar.dev@gmail.com' network='Mail' >
            <Icon.Mail size={26} />
          </NetworkLink>
          <NetworkLink linkDirection='https://wa.me/04123275955' network='WhatsApp' >
            <Icon.Smartphone size={26} />
          </NetworkLink>
          <NetworkLink linkDirection='https://www.github.com/SantiagoCode' network='GitHub' >
            <Icon.GitHub size={26} />
          </NetworkLink>
        </div>
      </div>
    </section>
  )
}

const Copyright = () => {
  return (
    <div className='flex flex-col text-center justify-center py-3'>
      <Link href={'https://github.com/SantiagoCode/Portfolio'}
            className='text-ms mb-1 text-rose-900 font-bold hover:scale-105 transition-all ease-in'>
        Take a look at the code of this portfolio on my GitHub. 👋
      </Link>
      <div className='text-xs'>Copyright © 2024 - Santiago Salazar Dev</div>
    </div>
  )
}

export default Footer