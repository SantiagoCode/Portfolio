import React from 'react';
import FullSection from '@/components/FullSection';
import Image from 'next/image';
import DownloadCV from '@/components/DownloadCV';

const AboutMe = () => {
	return (
		<FullSection id='AboutMe' clases='mb-12'>
			<AboutSantiago />
		</FullSection>
	);
};

const AboutSantiago = () => {
	return (
		<div className='santiago_container grid-cols-5 items-center gap-4 xl:grid'>
			<div className='santiago_picture relative col-span-2 mb-12 w-full xl:mb-0'>
				<Image src={`/image/santiago-pic-1.png`} alt='Santiago Picture' className='rounded-xl' width={400} height={800} priority />
			</div>

			<div className='santiago_content radial_contrast relative col-span-3 xl:ml-4'>
				<h1 className='title mb-6 text-5xl font-[200]'>
					Hello, my name is <span className='font-black'>Santiago Salazar</span>
				</h1>
				<p>
					<span>
						I am a <span className='font-bold'>FrontEnd Developer</span> with experience in high-demand web projects, standing out for quickly integrating into
						multidisciplinary teams, generating positive impact with <span className='font-bold'>accurate analysis and efficient solutions</span>.
					</span>
					<br />
					<br />
					<span>
						I have <span className='font-bold'>led successful projects</span>, facilitating communication between clients and development teams. My focus is on
						FrontEnd development, aiming to contribute with simple solutions and intuitive interfaces. I am seeking a team where I can continue to grow professionally
						and contribute with passion and commitment.
					</span>
				</p>
				<br />

				<DownloadCV />
			</div>
		</div>
	);
};

export default AboutMe;
