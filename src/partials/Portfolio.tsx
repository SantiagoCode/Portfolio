import React from 'react'
import Links from '@/components/Links'
import FullSection from '@/components/FullSection'
import Image from 'next/image'
import Link from 'next/link'
import Projects from './../../public/moks/portfolio-projects.json';

const Portfolio = () => {

  return (
    <FullSection clases='mb-32'>
      
      <h1 className="text-4xl mb-2">Portafolio</h1>
      <p className='text-sm mb-10 w-2/3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, commodi dignissimos. Laboriosam ducimus nesciunt saepe facere nisi quas, magnam consequatur, enim vero voluptates magni quos debitis praesentium, earum libero ex!</p>
      <ProjectCard />

    </FullSection>
  )
}

const ProjectCard = () => {
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full'>
      {Projects.map((project, index) => (
        <div className='ProjectCard col-span-1 px-4 py-6 bg-slate-900 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 hover:from-indigo-600 hover:to-violet-600 transition-all ease-in-out duration-300 shadow-lg hover:shadow-indigo-500/50 hover:scale-95' key={index}>
          <h2 className='text-lg'>
              {project.name}
          </h2>
          <h3 className='text-sm whitespace-nowrap overflow-hidden text-ellipsis w-full'>{project.description}</h3>
          <Link href={project.url}>
            <Image
              src={project.imageRef}
              alt={project.name}
              className="santiago_picture rounded mx-auto w-full mt-2 mb-2"
              width={100}
              height={40}
              priority
            />
          </Link>
          <ul className='flex justify-between flex-wrap'>
            {project.links.map((link, index) => (
              <Links href={link[1]} classNames='text-xs' key={index}>{link[0]}</Links>
            ))}
          </ul>
        </div>
      ))}
      <div className="group flex relative">
    <span className="bg-red-400 text-white px-2 py-1">Button</span>
    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Tooltip</span>
</div>
    </div>
  )
}

export default Portfolio