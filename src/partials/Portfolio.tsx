import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/components/Tag'
import FullSection from '@/components/FullSection'
import Skills from './../../public/moks/skills.json';
import Projects from './../../public/moks/portfolio-projects.json';
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
    <FullSection id='Portfolio' clases='mb-4'>
      <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
      <p className='text-sm mb-10 w-2/3 text-center'>My strength lies in FrontEnd, and it&apos;s where I find things that dazzle me, but <span className="text-rose-900 font-bold">I am currently developing a FullStack profile.</span></p>
      <ProjectCard />
    </FullSection>
  )
}

const ProjectCard = () => {
  const SkillsKeys = Object.keys(SkillsData)

  return (
    <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full'>
      {Projects.map((project, projectKey) => {
        
      const listOfSkills = project.tech.reduce((accumulator: Skill[], currentValue: string) => {
        if (SkillsKeys.includes(currentValue)) {
          accumulator.push(SkillsData[currentValue]);
        }
        return accumulator;
      }, []);

      return (
        <CardContainer className="inter-var" key={projectKey}>
          <CardBody className="bg-gradient-to-br from-rose-700 to-cyan-700 relative group/card border-black/[0.1] w-auto h-full rounded-xl p-6 border flex flex-col justify-between shadow-xl">
            <div className="">
              <CardItem
                translateZ="50"
                className="text-xl font-bold"
                  key={`${projectKey}-name`}
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                key={`${projectKey}-description`}
              >
                {project.short_description}
              </CardItem>
            </div>
            <div className="">
              <CardItem translateZ="100" className="w-full mt-4"
                key={`${projectKey}-image`}>
                  <Link href={`${project.page}`}>
                    <Image
                      src={project.imageRef}
                      height="1000"
                      width="1000"
                      className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={project.title}
                    />
                  </Link>
              </CardItem>
            </div>
            <ul className='flex justify-between flex-wrap pt-3'>
              {listOfSkills.map((obj: Skill, index: number) => (
                <CardItem
                  translateZ={40}
                  className="px-2 rounded-xs"
                  key={`${index}-stack`}
                >
                  <Tag key={index} small={true} url={obj.url} bgColor={obj.bgColor} txtColor={obj.textColor}>
                    {obj.name}
                  </Tag>
                </CardItem>
                ))}
              </ul>
          </CardBody>
        </CardContainer>
      )
      })}
    </div>
  )
}

export default Portfolio
