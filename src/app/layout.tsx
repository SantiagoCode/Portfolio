import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.scss';
import Navigation from '@/components/Navigation';
import Footer from '@/partials/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
