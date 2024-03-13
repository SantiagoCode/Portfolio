import React from 'react'
import Image from 'next/image'
import Tag from '@/components/Tag'
import FullSection from '@/components/FullSection'
import Skills from './../../public/mocks/skills.json';
import Projects from './../../public/mocks/portfolio-projects.json';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import RouterLink from '@/components/RouterLink'
import * as Icon from 'react-feather';

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
      <p className='mb-10 w-2/3 text-center text-sm'>My strength lies in FrontEnd, and it&apos;s where I find things that dazzle me, but <span className="font-black text-red-600">I am currently developing a FullStack profile.</span></p>
      <ProjectCard />
    </FullSection>
  )
}

const ProjectCard = () => {

  const SkillsKeys = Object.keys(SkillsData)

  return (
    <div className='grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {Projects.map((project, projectKey) => {
        
      const listOfSkills = project.tech.reduce((accumulator: Skill[], currentValue: string) => {
        if (SkillsKeys.includes(currentValue)) {
          accumulator.push(SkillsData[currentValue]);
        }
        return accumulator;
      }, []);

      return (
        <CardContainer className="inter-var before:absolute before:h-full before:w-full before:rounded-xl before:bg-[rgb(255,255,255,0.1)] before:hover:bg-[rgb(255,255,255,0.2)] before:transition-all before:duration-300 transition-all before:backdrop-blur-xl before:content-[''] before:border" key={projectKey}>
          <CardBody className="group/card relative flex h-full w-auto flex-col justify-between rounded-xl p-6">
            {project.real_project && 
              <CardItem
                translateZ="100"
                className='real_tag absolute right-2.5 top-0 z-20 flex bg-[rgb(255,255,255,0.1)] hover:bg-[rgb(255,255,255,0.2)] transition-all backdrop-blur-xl border rounded-full py-3 px-6 font-bold text-yellow-400'
                key={`${projectKey}-name-${project.real_project}`}
              >
                <p className='flex items-center'>
                  Real Project <Icon.Star className='ml-2' size={18} />
                </p>
              </CardItem>
            }
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-black"
                key={`${projectKey}-name`}
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm"
                key={`${projectKey}-description`}
              >
                {project.short_description}
              </CardItem>
            </div>
            <div>
              <CardItem translateZ="100" className="mt-4 w-full"
                key={`${projectKey}-image`}>

                  <RouterLink linkRef={`${project.page}`}>
                    <Image
                      src={project.imageRef}
                      height="1000"
                      width="1000"
                      className="h-50 w-full rounded-xl object-cover transition-all duration-300"
                      alt={project.title}
                    />
                  </RouterLink>

              </CardItem>
            </div>
            <ul className='flex flex-wrap justify-between pt-3'>
              {listOfSkills.map((obj: Skill, index: number) => (
                <CardItem
                  translateZ={40}
                  className="rounded-xs px-2"
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
