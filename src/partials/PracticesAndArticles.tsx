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
      <h1 className="mb-2 text-5xl font-black">Practices And Articles</h1>
      <Cards />
    </FullSection>
  )
}

const Cards = () => {
  const SkillsKeys = Object.keys(SkillsData)

  return (
    <div className='grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' data-scroll-section>
      {data.map((project, projectKey) => {
        
      const listOfSkills = project.tech.reduce((accumulator: Skill[], currentValue: string) => {
        if (SkillsKeys.includes(currentValue)) {
          accumulator.push(SkillsData[currentValue]);
        }
        return accumulator;
      }, []);

      return (
        <CardContainer className="inter-var" key={projectKey}>
          <CardBody className="group/card relative flex h-full w-auto flex-col justify-between rounded-xl border bg-gradient-to-br from-neutral-900 to-red-800 p-6">
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
                className="mt-2 max-w-sm text-sm"
                key={`${projectKey}-description`}
              >
                {project.short_description}
              </CardItem>
            </div>
            <div className="">
              <CardItem translateZ="100" className="mt-4 w-full"
                key={`${projectKey}-image`}>
                  <Link href={`${project.page}`}>
                    <Image
                      src={project.imageRef}
                      height="1000"
                      width="1000"
                      className="h-50 w-full rounded-xl object-cover transition-all duration-300 xl:hover:shadow-lg xl:hover:shadow-neutral-500"
                      alt={project.title}
                    />
                  </Link>
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

export default PracticesAndArticles
