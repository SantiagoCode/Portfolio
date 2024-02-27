import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const Hero = () => {
  const logoTechnologies = [
    ['Sass', 'png', 34, 30],
    ['tailwindBRAND', 'png', 45, 20],
    ['TypeScript', 'png', 30, 30],
    ['React', 'png', 32, 100], 
    ['Next', 'svg', 100, 30]
  ]

  return (
    <div id='Hero' className='relative mb-12 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4'>
      <Image
        src={`/image/stormtrooper.jpg`}
        alt="Hero BG"
        className="absolute h-full w-full object-cover"
        width={2900}
        height={1200}
        priority
      />
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
      <h1 className='z-20 hidden lg:block'>
        <TextGenerateEffect words={"Santiago Salazar - FrontEnd Developer"} className='mb-4 text-3xl font-black lg:text-center lg:text-5xl 2xl:text-6xl' />
      </h1>
      <h1 className='z-20 mb-5 lg:hidden'>
        <TextGenerateEffect words={"Santiago Salazar"} className='text-center text-5xl font-black' />
        <TextGenerateEffect words={"FrontEnd Developer"} className='text-center text-5xl font-black' />
      </h1>
      <ul className='z-20 flex rounded-full px-8 py-4 shadow-md shadow-red-700 backdrop-blur-md' data-aos="zoom-in-up" data-aos-delay="900" data-aos-duration="900">
        {logoTechnologies.map(([text, ext, w, h], index) => (
          <li key={index} className='flex items-center'>
            <Image
              src={`/image/${text}.${ext}`}
              alt="next Logo"
              className="transition-all xl:hover:scale-105"
              width={Number(w)}
              height={Number(h)}
              priority
            />
            {( index < logoTechnologies.length - 1 ) && <div className='mx-4 h-4 w-px bg-white'></div>  }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Hero