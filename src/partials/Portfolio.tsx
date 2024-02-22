import React from 'react'
import Links from '@/components/Links'
import FullSection from '@/components/FullSection'
import Image from 'next/image'
import Link from 'next/link'
import Projects from './../../public/moks/portfolio-projects.json';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Portfolio = () => {

  return (
    <FullSection clases='mb-32'>
      <h1 className="text-4xl mb-2">Portafolio</h1>
      <p className='text-sm mb-10 w-2/3 text-center'>Mi fuerte es el FrontEnd y es donde se encuentras las cosas que me deslumbran, pero <span className="text-violet-400">actualmente me encuentro en desarrollo de un perfil FullStack.</span></p>
      <ProjectCard />
    </FullSection>
  )
}

const ProjectCard = () => {
  return (
    <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full'>
      {/* {Projects.map((project, index) => (
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
      ))} */}
      {Projects.map((project, index) => (
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.name}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.imageRef}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={project.name}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  )
}

export default Portfolio