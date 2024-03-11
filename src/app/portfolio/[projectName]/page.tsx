"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'react-feather';
import Tag from '@/components/Tag'
import FullSection from '@/components/FullSection'
import Skills from '../../../../public/moks/skills.json';
import Projects from '../../../../public/moks/portfolio-projects.json';
import Gallery from '@/components/Gallery';
import { removeBlur } from "@/utils/smooth";

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

const Page = ({ params }: { params: any }) => {

  useEffect(() => {
    setTimeout(removeBlur, 300)
  }, [])

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
    <>
      <Image
        src={`/image/stormtrooper.jpg`}
        alt="Hero BG"
        className="fixed h-full object-cover"
        width={2900}
        height={1200}
        priority
      />
      <div className="fixed z-10 h-full w-full bg-gradient-to-t from-black to-transparent backdrop-blur-lg transition-all duration-300"></div>

      <FullSection id='Project'>
        <header className='z-20 mb-20 grid grid-cols-5 gap-6 xl:mb-0 xl:gap-20'>
          <div className="relative col-span-5 mt-20 xl:col-span-2 xl:mt-0">
            <Image
              src={imageRef}
              height="1000"
              width="1000"
              className="my-2 rounded-xl border object-cover transition-all duration-300 ease-in xl:hover:scale-105"
              alt={'OnceOnce'}
            />
            {secondImageRef &&
              <Image
                src={secondImageRef || imageRef}
                height="1000"
                width="1000"
                className="my-2 rounded-xl border object-cover transition-all duration-300 ease-in xl:hover:scale-105"
                alt={'OnceOnce'}
              />
            }
          </div>

          <div className="content col-span-5 flex flex-col justify-center xl:col-span-3">
            <h1 className="title mb-6 text-7xl font-black">
              {title}
            </h1>
            <p className="description text-ms lg:text-base">
              {description}
            </p>
            <div className="my-4 flex">
              {url && <Link href={url} target="_blank" className='mr-4 flex transition-all ease-in hover:text-red-700 xl:hover:scale-105'>Ir al sitio <Icon.ExternalLink className='ml-2' size={24} /></Link>}
              {repo && <Link href={repo} target="_blank" className='mr-4 flex transition-all ease-in hover:text-red-700 xl:hover:scale-105'>Repo <Icon.ExternalLink className='ml-2' size={24} /></Link>}
            </div>
            
            <div className="my-5 flex flex-col justify-between xl:flex-row">
              <ul className='flex flex-wrap'>
                {technologies.map((tool: any, index: number) => (
                  <Tag key={index} url={tool.url} bgColor={tool.bgColor} txtColor={tool.textColor}>
                    {tool.name}
                  </Tag>
                ))}
              </ul>
              <p className="text-xl font-black">
                {date}
              </p>
            </div>
          </div>
        </header>
      </FullSection>
    </>
  )
}

export default Page
