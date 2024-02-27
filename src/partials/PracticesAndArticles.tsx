import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/components/Tag'
import FullSection from '@/components/FullSection'
import Skills from './../../public/moks/skills.json';
import data from './../../public/moks/practices_and_articles.json';
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

const PracticesAndArticles = () => {

  return (
    <FullSection id='Portfolio'>
      <h1 className="text-5xl font-black mb-2">Practices And Articles</h1>
      <Cards />
    </FullSection>
  )
}

const Cards = () => {
  const SkillsKeys = Object.keys(SkillsData)

  return (
    <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full'>
      {data.map((project, projectKey) => {
        
      const listOfSkills = project.tech.reduce((accumulator: Skill[], currentValue: string) => {
        if (SkillsKeys.includes(currentValue)) {
          accumulator.push(SkillsData[currentValue]);
        }
        return accumulator;
      }, []);

      return (
        <CardContainer className="inter-var" key={projectKey}>
          <CardBody className="bg-gradient-to-br from-neutral-900 to-red-800 relative group/card w-auto h-full rounded-xl p-6 border flex flex-col justify-between">
            <div className="">
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
                className="text-sm max-w-sm mt-2"
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
                      className="h-50 w-full object-cover rounded-xl xl:hover:shadow-lg xl:hover:shadow-neutral-500 transition-all duration-300"
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

export default PracticesAndArticles
