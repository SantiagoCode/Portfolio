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
      <div className="santiago_container grid-cols-5 items-center gap-4 xl:grid">
        <Image
          src={`/image/santiago-pic-1.png`}
          alt="Santiago Picture"
          className="santiago_picture col-span-2 mx-auto mb-12 w-full rounded-xl shadow-xl transition-all duration-300 hover:border xl:mb-12"
          width={400}
          height={800}
          priority
        />
        <div className="santiago_content col-span-3 xl:ml-4">
          <h1 className="title mb-6 text-5xl font-black">
            Hello, my name is Santiago Salazar
          </h1>
          <p>
            <span>
              I am a <span className="font-black text-red-700">FrontEnd Developer</span> with experience in high-demand web projects,
              standing out for quickly integrating into multidisciplinary teams,
              generating positive impact with <span className="font-black text-red-700">accurate analysis and efficient solutions</span>.
            </span>
            <br/>
            <br/>
            <span>
              I have <span className="font-black text-red-700">led successful projects</span>, facilitating communication between clients and development teams.
              My focus is on FrontEnd development, aiming to contribute with
              simple solutions and intuitive interfaces. I am seeking a team where I can continue
              to grow professionally and contribute with passion and commitment.
            </span>
          </p>
        </div>
      </div>
  )
}

export default AboutMe