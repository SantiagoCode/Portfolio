import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import * as Icon from 'react-feather';

const Navigation = () => {
	const links = [
		['About Me', '#AboutMe'],
		['My Portfolio', '#Portfolio'],
		['Contact Me', '#Contact'],
	];

	const navItemStyles = 'ml-3 list-none capitalize transition-all ease-in text-lg md:ml-6 font-semibold hover:text-red-900';

	return (
		<div id='Navigation' className='fixed z-40 w-full opacity-0 transition-all delay-500 duration-500'>
			<div className='container mx-auto px-4'>
				<nav className='mx-auto mt-5 flex justify-between rounded-full border bg-[rgb(255,255,255,0.3)] px-8 backdrop-blur-lg'>
					<div className='flex'>
						<Link href='/'>
							<Image src='/image/logo_santiago1.svg' alt='logo' className='h-12' width={120} height={70} />
						</Link>
					</div>

					<div className='flex items-center'>
						<li className={navItemStyles}>
							<Link className='flex' href='/'>
								<Icon.Home size={24} className='xl:hidden'></Icon.Home>
								<span className='hidden xl:block'>Home</span>
							</Link>
						</li>

						{links.map((link, index) => (
							<div key={index} className={`hidden xl:flex last-of-type:mr-6 ${navItemStyles}`}>
								<Link href={`/${link[1]}`} className=''>
									{link[0]}
								</Link>
							</div>
						))}
					</div>

					<div className='flex items-center'>
						<li className={`${navItemStyles} hover:scale-110 hover:text-red-900 transition-all`}>
							<Link href='https://www.github.com/SantiagoCode' target='_blank'>
								<Icon.GitHub size={24} />
							</Link>
						</li>
						<li className={`${navItemStyles} hover:scale-110 hover:text-red-900 transition-all`}>
							<Link href='https://www.linkedin.com/in/santiagocode/' target='_blank'>
								<Icon.Linkedin size={24} />
							</Link>
						</li>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navigation;
