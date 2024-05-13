import React, { Suspense } from 'react';
import Image from 'next/image';
import Tag from '@/components/Tag';
import FullSection from '@/components/FullSection';
import Skills from './../../public/mocks/skills.json';
import Projects from './../../public/mocks/portfolio-projects.json';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import RouterLink from '@/components/RouterLink';
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
		<FullSection id='Portfolio' clases='radial_contrast'>
			<h1 className='mb-2 text-5xl font-black'>Portfolio</h1>
			<p className='mb-10 w-2/3 text-center text-sm'>
				My strength lies in FrontEnd, and it&apos;s where I find things that dazzle me, but <br />
				<span className='font-bold'>I am currently developing a FullStack profile.</span>
			</p>
			<ProjectCard />
		</FullSection>
	);
};

const ProjectCard = () => {
	const SkillsKeys = Object.keys(SkillsData);

	return (
		<div className='grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
			{Projects.map((project, projectKey) => {
				const listOfSkills = project.tech.reduce((accumulator: Skill[], currentValue: string) => {
					if (SkillsKeys.includes(currentValue)) {
						accumulator.push(SkillsData[currentValue]);
					}
					return accumulator;
				}, []);

				return (
					<CardContainer
						className="inter-var portfolio_card_container group transition-all before:absolute before:h-full before:w-full before:rounded-xl before:border before:bg-[rgb(255,255,255,0.1)] before:backdrop-blur-xl before:transition-all before:duration-300 before:content-[''] md:md:before:hover:bg-[rgb(255,255,255,0.3)]"
						key={projectKey}>
						<CardBody className='relative flex h-full w-auto flex-col justify-between rounded-xl p-6'>
							{project.real_project && (
								<CardItem
									translateZ='100'
									className='real_tag absolute right-2.5 top-0 z-20 flex rounded-full border bg-[rgb(255,255,255,0.1)] px-6 py-3 font-bold text-yellow-400 backdrop-blur-xl transition-all md:hover:bg-[rgb(255,255,255,0.3)]'
									key={`${projectKey}-name-${project.real_project}`}>
									<p className='flex items-center'>
										Real Project <Icon.Star className='ml-2' size={18} />
									</p>
								</CardItem>
							)}
							<div>
								<CardItem
									translateZ='50'
									className='project_title text-xl font-black text-red-900 transition-all group-hover:text-2xl md:text-white md:group-hover:text-red-900'
									key={`${projectKey}-name`}>
									{project.title}
								</CardItem>
								<CardItem as='p' translateZ='60' className='my-2 max-w-sm text-sm' key={`${projectKey}-description`}>
									{project.short_description}
								</CardItem>
							</div>
							<CardItem translateZ='100' className='w-full' key={`${projectKey}-image`}>
								<RouterLink linkRef={`${project.page}`}>
									<Suspense fallback={<div className='w-128 my-2 aspect-video animate-pulse rounded-xl border bg-gray-200'></div>}>
										<Image
											src={project.imageRef}
											height='1000'
											width='1000'
											className='h-50 aspect-video w-full rounded-xl object-cover transition-all duration-300'
											alt={project.title}
										/>
									</Suspense>
								</RouterLink>
							</CardItem>
							<ul className='flex flex-wrap justify-between pt-3'>
								{listOfSkills.map((obj: Skill, index: number) => (
									<CardItem translateZ={40} className='rounded-xs px-2' key={`${index}-stack`}>
										<Tag key={index} small={true} url={obj.url} bgColor={obj.bgColor} txtColor={obj.textColor}>
											{obj.name}
										</Tag>
									</CardItem>
								))}
							</ul>
						</CardBody>
					</CardContainer>
				);
			})}
		</div>
	);
};

export default Portfolio;
