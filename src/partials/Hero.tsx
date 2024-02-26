import Image from 'next/image'
import React from 'react'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const Hero = () => {
  const words = `Santiago Salazar - FrontEnd Developer`;
  const logoTechnologies = [
    ['Next', 'svg', 100, 30], 
    ['React', 'png', 32, 100], 
    ['TypeScript', 'png', 30, 30],
    ['tailwindBRAND', 'png', 45, 20],
    ['Sass', 'png', 34, 30]
  ]

  return (
    <div id='Hero' className='relative overflow-hidden px-4 min-h-screen flex flex-col items-center justify-center mb-12'>
      <Image
        src={`/image/bg-hero.png`}
        alt="Hero BG"
        className="h-full object-cover absolute"
        width={2900}
        height={1200}
        priority
      />
      <div className="absolute z-10 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
      <h1 className='z-20'>
        <TextGenerateEffect words={words} className='2xl:text-6xl lg:text-5xl text-3xl font-black mb-4 lg:text-center' />
      </h1>
      <ul className='z-20 flex backdrop-blur-md py-3 px-6 shadow-md shadow-red-700 rounded-full' data-aos="zoom-in-up" data-aos-delay="900" data-aos-duration="900">
        {logoTechnologies.map(([text, ext, w, h], index) => (
          <li key={index} className='flex items-center'>
            <Image
              src={`/image/${text}.${ext}`}
              alt="next Logo"
              className="hover:scale-105 transition-all"
              width={Number(w)}
              height={Number(h)}
              priority
            />
            {( index < logoTechnologies.length - 1 ) && <div className='bg-white w-px h-4 mx-4'></div>  }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Hero