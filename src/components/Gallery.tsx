import React from 'react'
import Image from 'next/image'

const Gallery = ({ project }: { project: any }) => {
  const { ListOfImages }: any = project;

  return (
    <div className='container px-4 mx-auto mb-12'>
      <h1 className="text-5xl font-bold mb-4">Gallery</h1>
      <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {ListOfImages.map((image: string, index: number) => (
          <Image
            src={`/image/${image}`}
            height="1000"
            width="1000"
            className="object-cover rounded-xl py-1 shadow-md hover:shadow-2xl hover:scale-105 transition-all ease-in"
            alt={'image'}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery