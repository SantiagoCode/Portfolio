import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { CardBody, CardContainer } from '@/components/ui/3d-card';

const Footer = () => {
	return (
		<div id='Footer' className='relative flex w-full flex-col justify-between overflow-hidden'>
			<div className='absolute z-10 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
			<div className='z-20 flex flex-col justify-between'>
				<ContactSection />
				<Copyright />
			</div>
		</div>
	);
};

const NetworkLink = ({ children, linkDirection, network }: { children: React.ReactNode; linkDirection: string; network: string }) => {
	return (
		<div className='flex items-center justify-center space-x-2 transition-all hover:scale-105 hover:font-bold'>
			<a className='flex flex-col items-center transition-all hover:scale-110 hover:text-red-900' href={linkDirection} target='_blank'>
				{children}
				<span className='text-sm font-semibold'>{network}</span>
			</a>
		</div>
	);
};

function ContactSection() {
	return (
		<section id='Contact' className='flex min-h-[80vh] w-full flex-col items-center justify-center py-6 opacity-0 transition-all duration-500 md:py-12 lg:py-16'>
			<CardContainer>
				<CardBody>
					<div className='footer_card_body container mx-auto flex aspect-square w-[50vw] min-w-[300px] max-w-[500px] flex-col items-center justify-center gap-4 rounded-xl border bg-[rgb(255,255,255,0.1)] px-8 py-4 text-center shadow-md backdrop-blur-lg transition-all duration-300 md:px-6 md:hover:bg-[rgb(255,255,255,0.3)] xl:aspect-video'>
						<div className='space-y-2'>
							<h2 className='text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl'>Ponte en contacto</h2>
							<p className='md:text-xl/relaxed'>Contáctame para iniciar una conversación.</p>
						</div>
						<div className='grid grid-cols-2 items-center justify-center gap-4 md:gap-8'>
							<NetworkLink linkDirection='https://www.linkedin.com/in/santiagocode/' network='LinkedIn'>
								<Icon.Linkedin size={26} />
							</NetworkLink>
							<NetworkLink linkDirection='mailto:santiagosalazar.dev@gmail.com' network='Mail'>
								<Icon.Mail size={26} />
							</NetworkLink>
							<NetworkLink linkDirection='https://wa.me/04123275955' network='WhatsApp'>
								<Icon.Smartphone size={26} />
							</NetworkLink>
							<NetworkLink linkDirection='https://www.github.com/SantiagoCode' network='GitHub'>
								<Icon.GitHub size={26} />
							</NetworkLink>
						</div>
					</div>
				</CardBody>
			</CardContainer>
		</section>
	);
}

const Copyright = () => {
	return (
		<div className='flex flex-col justify-center py-3 text-center'>
			<Link href={'https://github.com/SantiagoCode/Portfolio'} target='_blank' className='text-ms mb-1 font-bold transition-all ease-in xl:hover:scale-105'>
				Echa un vistazo al código de este portafolio en mi GitHub. 👋
			</Link>
			<div className='text-xs'>Copyright © 2024 ~ Santiago Salazar Dev</div>
		</div>
	);
};

export default Footer;
