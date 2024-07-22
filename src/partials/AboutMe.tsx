import Link from 'next/link';
import React from 'react';
import FullSection from '@/components/FullSection';
import Image from 'next/image';
import DownloadCV from '@/components/DownloadCV';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import CristalBtn from '@/components/CristalBtn';

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
				<Image src={`/image/santiago-pic-1.png`} alt='Imagen de Santiago' className='rounded-xl' width={400} height={800} priority />
			</div>

			<div className='santiago_content radial_contrast relative col-span-3 xl:ml-4'>
				<h1 className='title mb-6 md:text-5xl font-[200] text-4xl  '>
					Hola, mi nombre es <span className='font-black'>Santiago Salazar</span>
				</h1>
				<p>
					<span>
						Soy un <span className='font-bold'>Desarrollador FrontEnd Freelance</span> con experiencia en proyectos web de alta demanda, destacándome por mi capacidad
						para integrarme rápidamente en equipos multidisciplinarios y generar un impacto positivo con <span className='font-bold'>análisis precisos y soluciones eficientes</span>.
					</span>
					<br />
					<br />
					<span>
						He <span className='font-bold'>liderado proyectos exitosos</span> y facilitado la comunicación entre clientes y equipos de desarrollo. Mi enfoque está en el
						desarrollo FrontEnd, ofreciendo soluciones simples e interfaces intuitivas. Como freelance, busco colaborar con equipos y clientes que valoren la calidad y la
						eficiencia, contribuyendo con pasión y compromiso en cada proyecto.
					</span>
					<br />
					<br />
					<span>
						Estoy siempre en busca de nuevas oportunidades para aplicar mis habilidades en <span className='font-bold'>React.js, JavaScript, HTML, CSS y más</span>, y 
						ayudar a llevar sus ideas al siguiente nivel. Si necesitas un desarrollador freelance dedicado y apasionado por su trabajo, no dudes en contactarme.
					</span>
				</p>
				<br />

				<div className="flex gap-4">
					<CristalBtn text='Descarga mi CV' href='CV/Santiago_Salazar-FrontEnd_Dev.pdf' blank={true} download={true}/>
					<CristalBtn text='Conectemos' href='/#Contact' blank={false} download={false}/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
