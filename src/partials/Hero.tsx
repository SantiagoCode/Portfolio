import Image from 'next/image'
import React from 'react'
import FullSection from '@/components/FullSection'

const Hero = () => {

  const logoTechnologies = [
    ['Next', 'svg', 100, 30], 
    ['React', 'png', 32, 100], 
    ['TypeScript', 'png', 30, 30],
    ['Tailwind', 'svg', 68, 20],
    ['Sass', 'png', 34, 30],
    ['Node', 'png', 30, 30]
  ]

  return (
    <FullSection>
      <h1 className='text-4xl font-bold mb-4 font-mono'>Im Santiago - FullStack Developer</h1>
      <ul className='flex'>
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
    </FullSection>
  )
}

export default Hero