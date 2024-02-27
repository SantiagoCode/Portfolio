import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/components/Tag'
import FullSection from '@/components/FullSection'
import Skills from './../../public/moks/skills.json';
import Projects from './../../public/moks/portfolio_projects.json';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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

const Portfolio = () => {

  return (
    <FullSection id='Portfolio'>
      <h1 className="mb-2 text-5xl font-black">Portfolio</h1>
      <p className='mb-10 w-2/3 text-center text-sm'>My strength lies in FrontEnd, and it&apos;s where I find things that dazzle me, but <span className="font-black text-red-700">I am currently developing a FullStack profile.</span></p>
        <ProjectCard />
    </FullSection>
  )
}

const ProjectCard = () => {
  const SkillsKeys = Object.keys(SkillsData)

  return (
    <div id='Portfolio' className='grid w-full grid-cols-1 gap-4'>
      {Projects.map((project, projectKey) => {
        
      const listOfSkills = project.tech.reduce((accumulator: Skill[], currentValue: string) => {
        if (SkillsKeys.includes(currentValue)) {
          accumulator.push(SkillsData[currentValue]);
        }
        return accumulator;
      }, []);

      return (
            <Link href={project.page} className='group relative mx-auto aspect-video max-h-[80vh] w-full max-w-[80vw] overflow-hidden rounded-xl border-l-2 border-red-700 transition-all duration-300'>
              <Image
                src={project.imageRef}
                height="2000"
                width="2000"
                className="project-image absolute h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                alt={project.title}
              />
              <div className="pointer-events-none absolute z-10 h-full w-full bg-gradient-to-b from-black to-transparent opacity-100 transition-all duration-300 group-hover:opacity-0"></div>
              <div className="pointer-events-none absolute z-10 h-full w-full bg-gradient-to-t from-black to-transparent opacity-100 transition-all duration-300 group-hover:opacity-0"></div>

              <div className="content pointer-events-none relative z-20 mx-auto flex h-full flex-col justify-between px-4 py-5 transition-all duration-300 xl:px-6 xl:py-8">
                <h1 className="project-title text-2xl font-black transition-all duration-300 group-hover:text-red-700 xl:text-9xl">
                  {project.title}
                </h1>
                <div className="transition-all duration-300 group-hover:hidden">
                  <p className="project-title max-w-[70ch] font-black">{project.description}</p>
                  <ul className='flex flex-wrap pt-3'>
                    {listOfSkills.map((obj: Skill, index: number) => (
                      <div className="mr-4">
                        <Tag key={index} small={true} url={obj.url} bgColor={obj.bgColor} txtColor={obj.textColor}>
                          {obj.name}
                        </Tag>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
      )
      })}
    </div>
  )
}

export default Portfolio
