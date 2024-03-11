import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from 'react-feather'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Footer = () => {
  return (
    <div className='relative flex w-full flex-col justify-between overflow-hidden'>
      <Image
        src={`/image/stormtrooper.jpg`}
        alt="Footer BG"
        className="absolute min-h-screen w-full object-cover"
        width={2900}
        height={1200}
        priority
      />
      <div className="absolute z-10 h-full w-full bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
      <div className="z-20 flex flex-col justify-between">
        <ContactSection />
        <Copyright />
      </div>
    </div>
  )
}

const NetworkLink = ({ children, linkDirection, network }: { children: React.ReactNode, linkDirection: string, network: string }) => {
  return (
    <div className="flex items-center justify-center space-x-2 transition-all hover:scale-105 hover:text-red-700">
      <a className='flex flex-col items-center' href={linkDirection}>
        {children}
        <span className="text-sm font-medium">{network}</span>
      </a>
    </div>
  )
}

function ContactSection() {
  return (
    <section className="flex min-h-[80vh] w-full flex-col items-center justify-center py-6 md:py-12 lg:py-16">
      <CardContainer>
        <CardBody>
          <CardItem
            translateZ={20}>

            <div className="container mx-auto flex aspect-square w-[50vw] min-w-[300px] max-w-[500px] flex-col items-center justify-center gap-4 rounded-xl bg-[rgb(255,255,255,0.1)] px-8 py-4 text-center shadow-md backdrop-blur-lg transition-all md:px-6 xl:aspect-video">
              <div className="space-y-2">
                <h2 className="text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl">Get in touch</h2>
                <p className="md:text-xl/relaxed">Reach out to start a conversation.</p>
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

          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  )
}

const Copyright = () => {
  return (
    <div className='flex flex-col justify-center py-3 text-center'>
      <Link href={'https://github.com/SantiagoCode/Portfolio'}
            className='text-ms mb-1 font-black text-red-700 transition-all ease-in xl:hover:scale-105'>
        Take a look at the code of this portfolio on my GitHub. 👋
      </Link>
      <div className='text-xs'>Copyright © 2024 - Santiago Salazar Dev</div>
    </div>
  )
}

export default Footer