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
    <div className='container mx-auto px-4 min-h-screen flex flex-col items-center justify-center mb-32'>
      <h1 className=''>
        <TextGenerateEffect words={words} className='lg:text-5xl text-3xl font-bold mb-4 font-mono lg:text-center' />
      </h1>
      <ul className='flex' data-aos="zoom-in-up" data-aos-delay="900" data-aos-duration="900">
        {logoTechnologies.map(([text, ext, w, h], index) => (
          <li key={index} className='flex items-center'>
            <Image
              src={`/image/${text}.${ext}`}
              alt="next Logo"
              className=""
              width={Number(w)}
              height={Number(h)}
              priority
            />

            {( index < logoTechnologies.length - 1 ) && <div className='bg-gray-900 w-px h-4 mx-4'></div>  }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Hero