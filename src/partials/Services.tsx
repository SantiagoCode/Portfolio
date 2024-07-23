'use client';

import React from 'react';
import FullSection from '@/components/FullSection';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { RocketIcon, CodeIcon, BoltIcon } from '@/components/icons';

interface Service {
  icon: keyof typeof iconMapping;
  title: string;
  description: string;
}

const iconMapping = {
  RocketIcon: RocketIcon,
  CodeIcon: CodeIcon,
  BoltIcon: BoltIcon,
};

const Services: Service[] = [
  {
    icon: 'RocketIcon',
    title: 'Diseño Web',
    description: 'Diseño sitios web atractivos y funcionales que se adaptan a la identidad de tu marca. Cada diseño es personalizado para garantizar una experiencia de usuario excepcional y una interfaz visualmente impactante.',
  },
  {
    icon: 'CodeIcon',
    title: 'Desarrollo Web',
    description: 'Desarrollo sitios web robustos y escalables, incluyendo landing pages, páginas de contacto y sitios multipágina. Utilizo las últimas tecnologías para garantizar rendimiento, seguridad y capacidad de crecimiento según las necesidades de tu negocio.',
  },
  {
    icon: 'BoltIcon',
    title: 'Accesibilidad Web',
    description: 'Aseguro que tu sitio web sea accesible para todos los usuarios, cumpliendo con las normas y estándares de accesibilidad. Esto incluye optimización para lectores de pantalla, navegación por teclado y otros ajustes necesarios para una experiencia inclusiva.',
  },
];

export default function Servicios() {
  return (
    <FullSection id='Services' clases='radial_contrast'>
      <div className='relative mx-auto flex flex-col justify-center'>
        <section className="w-full">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mis servicios web</h2>
                <p className="mx-auto mb-10 w-full text-center">
                  Ofrezco un paquete completo de servicios de desarrollo web para asegurar el éxito de tu presencia en línea.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Services.map((item, key) => (
                <CardContainer key={key}
                  id={item.title.replace(/\s+/g, '_')}
                  className="inter-var service_card_container group transition-all before:absolute before:h-full before:w-full before:rounded-xl before:border before:bg-[rgb(255,255,255,0.1)] before:backdrop-blur-xl before:transition-all before:duration-300 before:content-[''] md:before:hover:bg-[rgb(255,255,255,0.3)]">
                  <CardBody className='relative flex h-full w-auto flex-col justify-between rounded-xl p-6'>
                    <CardItem
                      translateZ='50'
                      className='service_title text-xl transition-all'>
                      <div className="mb-4 flex items-center gap-4">
                        <div className="rounded-md bg-[#8b0000] p-3">
                          {React.createElement(iconMapping[item.icon], { className: "h-6 w-6" })}
                        </div>
                        <h3 className='project_title text-xl font-black text-white transition-all group-hover:text-2xl md:group-hover:text-red-900'>
                          {item.title}
                        </h3>
                      </div>
                      <p className='my-2 max-w-sm text-sm md:text-base'>
                        {item.description}
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        </section>
      </div>
    </FullSection>
  )
}
