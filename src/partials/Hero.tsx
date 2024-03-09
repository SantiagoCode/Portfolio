import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import FixedBackground from '@/components/FixedBackground'

const Hero = () => {
  const logoTechnologies = [
    ['sass', 'svg', 34, 30],
    ['tailwindBRAND', 'png', 45, 20],
    ['JavaScript', 'png', 30, 30],
    ['react', 'svg', 32, 100], 
    ['asd', 'svg', 32, 100]
  ]

  return (
    <div id='Hero' className='relative mb-12 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4'>
      <FixedBackground />

      <h1 className='z-20 mb-7'>
        <TextGenerateEffect words={"Santiago Salazar"} className='mb-0 text-center text-7xl font-black' />
        <TextGenerateEffect words={"FrontEnd Developer"} className='text-center text-3xl font-[300]' />
      </h1>
      
      <ul className='z-20 flex rounded-full border bg-[rgb(255,255,255,0.1)] px-8 py-2 backdrop-blur-lg' data-aos="zoom-in-up" data-aos-delay="900" data-aos-duration="900">
        {logoTechnologies.map(([text, ext, w, h], index) => (
          <li key={index} className='flex items-center'>
            <Image
              src={`/image/${text}.${ext}`}
              alt="next Logo"
              className="rounded transition-all xl:hover:scale-105"
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