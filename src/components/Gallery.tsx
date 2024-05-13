import React from 'react';
import Image from 'next/image';

const Gallery = ({ project }: { project: any }) => {
	const { ListOfImages }: any = project;

	return (
		<div id='Gallery' className='container z-10 mx-auto mb-12 px-4 opacity-0 transition-all duration-500'>
			<h1 className='mb-4 text-5xl font-black'>Gallery</h1>
			<div className='grid gap-4 lg:grid-cols-2'>
				{ListOfImages.map((image: string, index: number) => (
					<Image
						src={`/image/${image}`}
						height='1000'
						width='1000'
						className='my-2 rounded-xl border object-cover shadow-md transition-all duration-300 ease-in xl:hover:scale-105'
						alt={'image'}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Gallery;
