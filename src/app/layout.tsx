import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.scss';
import Navigation from '@/components/Navigation';
import Footer from '@/partials/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

const Jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Santiago - FrontEnd Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/image/logo.svg' />
			</head>
			<body className={`${Jakarta.className} font-[200]`}>
				<Navigation />
				<div className='flex min-h-screen flex-col justify-between bg-black'>

					<div className="whatsapp-btn">
						<CardContainer
							id={'Hero_Stack'}
							className="inter-var hero_card_container transition-all before:absolute before:h-full before:w-full before:scale-75 before:rounded-full before:border before:bg-[rgb(255,255,255,0.1)] before:backdrop-blur-xl before:transition-all before:duration-300 before:content-[''] md:before:scale-100 md:before:hover:bg-[rgb(255,255,255,0.3)]">
							<CardBody className='relative h-full w-auto scale-75 p-2 md:scale-100'>
								<CardItem translateZ={40} className='rounded-full'>
									<Link href={'https://wa.me/+584123275955'} className=''>
										<Image src={'/image/whatsapp-icon.svg'} alt='WhatsApp Link' width={50} height={50} className='p-1'/>
									</Link>
								</CardItem>
							</CardBody>
						</CardContainer>
					</div>

					{children}
					<SpeedInsights />
					<Footer />
				</div>
			</body>
		</html>
	);
}
