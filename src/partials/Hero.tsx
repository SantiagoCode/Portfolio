'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import FixedBackground from '@/components/FixedBackground';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { removeBlur } from '@/utils/smooth';

const Hero = () => {
	useEffect(() => {
		setTimeout(removeBlur, 300);
	}, []);

	return (
		<>
			<FixedBackground />
			<div id='Hero' className='container relative mx-auto mb-12 flex min-h-screen flex-col justify-center overflow-hidden px-4'>
				<div className='z-20 text-center'>
					<Image src={`/image/logo_santiago1.svg`} alt='logo' className='mx-auto' width={800} height={250} priority />
					<h2 className='font-300 text-xl md:text-3xl lg:text-5xl'>FrontEnd Developer</h2>
				</div>

				<CardContainer
					id={'Hero_Stack'}
					className="inter-var hero_card_container transition-all before:absolute before:h-full before:w-full before:scale-75 before:rounded-full before:border before:bg-[rgb(255,255,255,0.1)] before:backdrop-blur-xl before:transition-all before:duration-300 before:content-[''] md:before:hover:bg-[rgb(255,255,255,0.3)] md:before:scale-100">
					<CardBody className='relative h-full w-auto scale-75 px-8 py-2 md:scale-100'>
						<Technologies />
					</CardBody>
				</CardContainer>
			</div>
		</>
	);
};

const Technologies = () => {
	const logoTechnologies = [
		['sass', 'svg', 34, 30],
		['tailwindBRAND', 'png', 45, 20],
		['JavaScript', 'png', 30, 30],
		['react', 'svg', 32, 100],
		['asd', 'svg', 32, 100],
	];

	return (
		<ul className='flex items-center'>
			{logoTechnologies.map(([text, ext, w, h]: any, index: number) => (
				<CardItem translateZ={40} className='rounded-xs px-2' key={`${index}-stack`}>
					<li key={index} className='mx-2 flex items-center'>
						<Image
							src={`/image/${text}.${ext}`}
							alt='next Logo'
							className='rounded transition-all xl:hover:scale-105'
							width={Number(w)}
							height={Number(h)}
							priority
						/>
					</li>
				</CardItem>
			))}
		</ul>
	);
};

export default Hero;
