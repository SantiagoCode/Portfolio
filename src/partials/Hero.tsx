"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import FixedBackground from '@/components/FixedBackground'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { removeBlur } from '@/utils/smooth';

const Hero = () => {
  const logoTechnologies = [
    ['sass', 'svg', 34, 30],
    ['tailwindBRAND', 'png', 45, 20],
    ['JavaScript', 'png', 30, 30],
    ['react', 'svg', 32, 100], 
    ['asd', 'svg', 32, 100]
  ]
  
  useEffect(() => {
    setTimeout(removeBlur, 300)
  }, [])

  return (
    <>
      <FixedBackground />
      <div id='Hero' className='relative mb-12 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4'>

        <h1 className='z-20 mb-7'>
          <TextGenerateEffect words={"Santiago Salazar"} className='mb-0 text-center text-7xl font-black' />
          <TextGenerateEffect words={"FrontEnd Developer"} className='text-center text-3xl font-[200]' />
        </h1>

        <CardContainer id={'Hero_Stack'} className="inter-var before:absolute before:h-full before:w-full before:rounded-full before:bg-[rgb(255,255,255,0.1)] before:hover:bg-[rgb(255,255,255,0.2)] before:transition-all before:duration-300 transition-all before:backdrop-blur-xl before:content-[''] before:border">
          <CardBody className="relative h-full w-auto px-8 py-2">
            <ul className='flex items-center'>
              {logoTechnologies.map(([text, ext, w, h], index) => (
                <CardItem
                  translateZ={40}
                  className="rounded-xs px-2"
                  key={`${index}-stack`}
                >
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
                </CardItem>
                ))}
            </ul>
          </CardBody>
        </CardContainer>
      </div>
    </>
  )
}

export default Hero