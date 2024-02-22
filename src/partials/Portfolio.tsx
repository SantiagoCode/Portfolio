import React from 'react'
import Links from '@/components/Links'
import FullSection from '@/components/FullSection'
import Image from 'next/image'
import Link from 'next/link'
import Projects from './../../public/moks/portfolio-projects.json';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Portfolio = () => {

  return (
    <FullSection clases='mb-12'>
      <h1 className="text-4xl mb-2">Portafolio</h1>
      <p className='text-sm mb-10 w-2/3 text-center'>Mi fuerte es el FrontEnd y es donde se encuentras las cosas que me deslumbran, pero <span className="text-violet-400">actualmente me encuentro en desarrollo de un perfil FullStack.</span></p>
      <ProjectCard />
    </FullSection>
  )
}

const ProjectCard = () => {
  return (
    <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full'>
      {Projects.map((project, projectKey) => (
        <CardContainer className="inter-var" key={projectKey}>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-full rounded-xl p-6 border flex flex-col justify-between">
            <div className="">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                  key={`${projectKey}-name`}
              >
                {project.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  key={`${projectKey}-description`}
              >
                {project.description}
              </CardItem>
            </div>
            <div className="">
              <CardItem translateZ="100" className="w-full mt-4"
                key={`${projectKey}-image`}>
                <Link href={`${project.url}`}>
                  <Image
                    src={project.imageRef}
                    height="1000"
                    width="1000"
                    className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.name}
                    />
                  </Link>
              </CardItem>
            </div>
            <ul className='flex justify-between flex-wrap'>
              {project.links.map((link, index) => (
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    key={`${index}-stack`}
                >
                      <Links href={link[1]} classNames='text-xs' key={index}>{link[0]}</Links>
                </CardItem>
                ))}
              </ul>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  )
}

export default Portfolio