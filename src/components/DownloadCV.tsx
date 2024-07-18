import Link from 'next/link';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

const DownloadCV = () => {
	return (
		<CardBody className='w-[fit-content]'>
			<CardContainer>
				<Link href='CV/Santiago_Salazar-FrontEnd_Dev.pdf' target='_blank' download>
					<CardItem
						translateZ='20'
						className='download_button flex rounded-full border bg-[rgb(255,255,255,0.1)] px-6 py-3 backdrop-blur-xl transition-all md:hover:bg-[rgb(255,255,255,0.3)]'>
						Descarga mi CV
					</CardItem>
				</Link>
			</CardContainer>
		</CardBody>
	);
};

export default DownloadCV;
