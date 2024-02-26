import React from 'react'
import FullSection from '@/components/FullSection'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <FullSection id='AboutMe' clases='mb-12'>
      <AboutSantiago />
    </FullSection>
  )
}

const AboutSantiago = () => {
  return (
    <section className='santiago_section mb-12 xl:mb-0'>
      <div className="santiago_container items-center xl:grid gap-4 grid-cols-5">
        <Image
          src={`/image/santiago-pic-1.png`}
          alt="Santiago Picture"
          className="santiago_picture col-span-2 rounded-xl mb-12 xl:mb-12 mx-auto w-full shadow-xl  hover:shadow-lg hover:shadow-lg hover:shadow-neutral-500 transition-all duration-300"
          width={400}
          height={800}
          priority
        />
        <div className="santiago_content col-span-3 xl:ml-4">
          <h1 className="title text-5xl font-black mb-6">
            Hello, my name is Santiago Salazar
          </h1>
          <p>
            <span>
              I am a <span className="text-red-700 font-black">FrontEnd Developer</span> with experience in high-demand web projects,
              standing out for quickly integrating into multidisciplinary teams,
              generating positive impact with <span className="text-red-700 font-black">accurate analysis and efficient solutions</span>.
            </span>
            <br/>
            <br/>
            <span>
              I have <span className="text-red-700 font-black">led successful projects</span>, facilitating communication between clients and development teams.
              My focus is on FrontEnd development, aiming to contribute with
              simple solutions and intuitive interfaces. I am seeking a team where I can continue
              to grow professionally and contribute with passion and commitment.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe