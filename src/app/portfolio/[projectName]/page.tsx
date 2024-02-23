import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'react-feather';
import FullSection from '@/components/FullSection'
import Skills from './../../../../public/moks/skills.json';
import Projects from './../../../../public/moks/portfolio-projects.json';

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

// interface ProjectType {
//   title: string;
//   description: string;
//   url: string;
//   imageRef: string;
//   tech: string[][];
// }

const page = ({ params }: { params: any }) => {
  const pageProject = Projects.find((project: any) => project.id === params.projectName);
  if (!pageProject) return <div>Proyecto no encontrado</div>;
  const { title, description, url, repo, imageRef, tech, date }: any = pageProject;

  const SkillsKeys = Object.keys(SkillsData)

  const technologies = tech.reduce((accumulator: any, currentValue: any) => {
    if (SkillsKeys.includes(currentValue)) {
      accumulator.push(SkillsData[currentValue]);
    }
    return accumulator;
  }, [])

  return (
    <FullSection>
      <header className='grid gap-6 xl:gap-20 grid-cols-5 mb-20 xl:mb-0'>
        <div className="xl:col-span-2 col-span-5 mt-20 xl:mt-0">
          <Image
            src={imageRef}
            height="1000"
            width="1000"
            className="object-cover rounded-xl py-1"
            alt={'OnceOnce'}
          />
          <Image
            src={imageRef}
            height="1000"
            width="1000"
            className="object-cover rounded-xl py-1"
            alt={'OnceOnce'}
          />
        </div>
        <div className="content xl:col-span-3 col-span-5 flex flex-col justify-center">
          <h1 className="title text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="description text-ms lg:text-base">
            {description}
          </p>
          <div className="flex my-4">
            {url && <Link href={url} className='flex mr-4'>Ir al sitio <Icon.ExternalLink className='ml-2' size={24} /></Link>}
            {repo && <Link href={repo} className='flex mr-4'>Repo <Icon.ExternalLink className='ml-2' size={24} /></Link>}
          </div>
          <div className="flex xl:flex-row flex-col justify-between my-5">
            <ul className='flex flex-wrap'>
              {technologies.map((tool: any, index: number) => (
                <Tag key={index} url={tool.url} bgColor={tool.bgColor} txtColor={tool.textColor}>
                  {tool.name}
                </Tag>
              ))}
            </ul>
            <p className="font-bold text-white">
              {date}
            </p>
          </div>
        </div>
      </header>
    </FullSection>
  )
}

const Tag = ({ children, bgColor, txtColor, url }: { children: React.ReactNode, bgColor: string, txtColor: string, url: string }) => {

  return (
    <Link href={url} 
          className={`mr-3 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mb-2 rounded-full`}
          style={{ backgroundColor: bgColor, color: txtColor }}
        >
      {children}
    </Link>
  )
}


export default page
