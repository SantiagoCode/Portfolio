import React from 'react';
import Link from 'next/link';
import FullSection from '@/components/FullSection';
import * as Icon from 'react-feather';

const SantiagoExperience = () => {
	return (
		<FullSection id='SantiagoExperience' clases='radial_contrast'>
			<div className='grid-cols-5 items-center gap-4 xl:grid'>
				<ExperienceResume />
				<TimeLine />
			</div>
		</FullSection>
	);
};

const ExperienceResume = () => {
	return (
		<div className='santiago_content col-span-3 mb-12 xl:mb-0'>
			<h1 className='title mb-6 text-5xl font-[200]'>
				Something about <span className='font-black'>my work experience</span>
			</h1>
			<p>
				<span>
					As a <span className='font-bold'>passionate FrontEnd developer</span>, I have specialized in <span className='font-bold'>React.js</span>, creating{' '}
					<span className='font-bold'>exceptional web experiences</span> with JavaScript and CSS. At <span className='font-bold'>Movidagráfica™</span>, I had the
					opportunity to lead a small team on a high-demand project, allowing me to demonstrate my leadership skills and attention to detail.
				</span>
				<br />
				<br />
				<span>
					My experience also includes working as a <span className='font-bold'>FrontEnd Developer</span> at <span className='font-bold'>Studio Salvatori</span>,
					where I learned the fundamentals of web development. My technical skills and experiences include:{' '}
					<span className='font-bold'>
						React, NextJS, HTML, CSS and SASS, JavaScript and TypeScript, Git and GitHub, WordPress and ACF, Laravel, BootstrapCSS, BulmaCSS, and TailwindCSS
					</span>
					.
				</span>
				<br />
				<br />
				<span>
					In addition to my technical experience, I hold a{' '}
					<Link href={'https://www.efset.org/cert/xFaeXR'} target='_blank' className='font-bold'>
						B2 level English certification
					</Link>
					, allowing me to communicate effectively in a global environment. I am excited to contribute to software development with innovative solutions, staying
					updated with the latest technological trends. I am ready to contribute with passion and commitment to a team where I can continue to grow professionally!
				</span>
			</p>
		</div>
	);
};

const TimeLine = () => {
	return (
		<div className='relative col-span-2 space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent xl:before:mx-auto xl:before:translate-x-0'>
			<Experience date={'2024 ~ Present'} agencie={'789.mx'} position={'FrontEnd Developer'} />
			<Experience date={'2022 ~ 2023'} agencie={'Movidagrafica'} position={'FullStack Developer & Team Leader'} />
			<Experience date={'2022'} agencie={'Studio Salvatori'} position={'FrontEnd Developer'} />
		</div>
	);
};

const Experience = (props: { date: string; agencie: string; position: string }) => {
	return (
		<div className='is-active group relative flex w-full items-center justify-between md:w-2/4 xl:w-full xl:justify-normal xl:even:flex-row-reverse xl:even:text-right'>
			<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow group-[.is-active]:bg-white group-[.is-active]:text-emerald-50 xl:order-1 xl:group-odd:-translate-x-1/2 xl:group-even:translate-x-1/2'>
				<Icon.Check size={21} color='black' />
			</div>

			<ExperienceBox {...props} />
		</div>
	);
};

const ExperienceBox = ({ date, agencie, position }: { date: string; agencie: string; position: string }) => {
	return (
		<div className='group/card w-[calc(100%-4rem)] rounded-xl border bg-[rgb(255,255,255,0.1)] p-4 py-4 backdrop-blur-lg transition-all duration-300 hover:scale-105 md:hover:bg-[rgb(255,255,255,0.3)] xl:w-[calc(50%-2.5rem)]'>
			<time className='font-caveat text-xs font-medium'>{date}</time>
			<div className='text-base font-bold uppercase text-red-900 transition-all group-hover/card:text-red-900 md:text-white'>{agencie}</div>
			<div className='text-xs'>{position}</div>
		</div>
	);
};

export default SantiagoExperience;
