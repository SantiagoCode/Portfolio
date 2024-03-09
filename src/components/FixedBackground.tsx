import React from 'react'
import Image from 'next/image'

const FixedBackground = () => {
  return (
      <div className="fixed h-full w-full object-cover">
        <Image
          src={`/image/stormtrooper.jpg`}
          alt="Hero BG"
          className="absolute h-full w-full object-cover"
          width={2900}
          height={1200}
          priority
        />
        <div className="absolute z-10 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
      </div>
  )
}

export default FixedBackground