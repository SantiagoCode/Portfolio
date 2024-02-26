import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'react-feather';
import Tag from '@/components/Tag'
import FullSection from '@/components/FullSection'
import Skills from './../../../../public/moks/skills.json';
import Projects from './../../../../public/moks/portfolio-projects.json';
import Gallery from '@/components/Gallery';

type Skill = {
  name: string;
  url: string;
  textColor: string;
  bgColor: string;
};

type SkillsType = {
  [key: string]: Skill;
};

const SkillsData: SkillsType = Skills[0];

const page = ({ params }: { params: any }) => {
  const pageProject = Projects.find((project: any) => project.id === params.projectName);
  if (!pageProject) return <div>Proyecto no encontrado</div> 

  const { ListOfImages }: any = pageProject;
  
  return (
    <>
      <Header project={pageProject} />
      {(ListOfImages.length > 0) &&
        <Gallery project={pageProject} />
      }
    </>
  )
}

const Header = ({ project }: { project: any }) => {
  const { title, description, url, repo, imageRef, secondImageRef, tech, date }: any = project;

  const SkillsKeys = Object.keys(SkillsData)

  const technologies = tech.reduce((accumulator: any, currentValue: any) => {
    if (SkillsKeys.includes(currentValue)) {
      accumulator.push(SkillsData[currentValue]);
    }
    return accumulator;
  }, [])

  return (
    <div className='relative overflow-hidden px-4 min-h-screen flex flex-col items-center justify-center mb-12'>
      <Image
        src={`/image/stormtrooper.jpg`}
        alt="Hero BG"
        className="h-full object-cover absolute"
        width={2900}
        height={1200}
        priority
      />
      <div className="absolute z-10 w-full h-full bg-gradient-to-t from-black to-transparent backdrop-blur-lg"></div>
      <header className='grid gap-6 xl:gap-20 grid-cols-5 mb-20 xl:mb-0 z-20'>
        <div className="xl:col-span-2 col-span-5 mt-20 xl:mt-0 relative">
          <Image
            src={imageRef}
            height="1000"
            width="1000"
            className="object-cover rounded-xl my-2 shadow-md xl:hover:scale-105 xl:hover:shadow-lg xl:hover:shadow-neutral-500 transition-all duration-300 ease-in"
            alt={'OnceOnce'}
          />
          {secondImageRef &&
            <Image
              src={secondImageRef || imageRef}
              height="1000"
              width="1000"
              className="object-cover rounded-xl my-2 shadow-md xl:hover:scale-105 xl:hover:shadow-lg xl:hover:shadow-neutral-500 transition-all duration-300 ease-in"
              alt={'OnceOnce'}
            />
          }
        </div>

        <div className="content xl:col-span-3 col-span-5 flex flex-col justify-center">
          <h1 className="title text-6xl font-black mb-6">
            {title}
          </h1>
          <p className="description text-ms lg:text-base">
            {description}
          </p>
          <div className="flex my-4">
            {url && <Link href={url} className='flex mr-4 xl:hover:scale-105 hover:text-red-700 transition-all ease-in'>Ir al sitio <Icon.ExternalLink className='ml-2' size={24} /></Link>}
            {repo && <Link href={repo} className='flex mr-4 xl:hover:scale-105 hover:text-red-700 transition-all ease-in'>Repo <Icon.ExternalLink className='ml-2' size={24} /></Link>}
          </div>
          <div className="flex xl:flex-row flex-col justify-between my-5">
            <ul className='flex flex-wrap'>
              {technologies.map((tool: any, index: number) => (
                <Tag key={index} url={tool.url} bgColor={tool.bgColor} txtColor={tool.textColor}>
                  {tool.name}
                </Tag>
              ))}
            </ul>
            <p className="font-black text-xl">
              {date}
            </p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default page
