'use client';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

export default function Servicios() {

  return (
    <div id='Servicios' className='container relative mx-auto mb-12 flex min-h-screen flex-col justify-center overflow-hidden px-4'>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="radial_contrast container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mis servicios web</h2>
              <p className="mx-auto mb-10 w-full text-center">
                Ofrezco un paquete completo de servicios de desarrollo web para asegurar el éxito de tu presencia en línea.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CardContainer
              id={'Diseno_Web'}
              className="inter-var service_card_container group transition-all before:absolute before:h-full before:w-full before:rounded-xl before:border before:bg-[rgb(255,255,255,0.1)] before:backdrop-blur-xl before:transition-all before:duration-300 before:content-[''] md:before:hover:bg-[rgb(255,255,255,0.3)]">
              <CardBody className='relative flex h-full w-auto flex-col justify-between rounded-xl p-6'>
                <CardItem
                  translateZ='50'
                  className='service_title text-xl transition-all'>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-md bg-[#8b0000] p-3">
                      <CodeIcon className="h-6 w-6" />
                    </div>
                    <h3 className='project_title text-xl font-black text-white transition-all group-hover:text-2xl md:group-hover:text-red-900'>Diseño Web</h3>
                  </div>
                  <p className='my-2 max-w-sm text-sm md:text-base'>
                    Diseño sitios web atractivos y funcionales que se adaptan a la identidad de tu marca. 
                    <br />
                    Cada diseño es personalizado para garantizar una experiencia de usuario excepcional y una interfaz visualmente impactante.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer
              id={'Desarrollo_Web'}
              className="inter-var service_card_container group transition-all before:absolute before:h-full before:w-full before:rounded-xl before:border before:bg-[rgb(255,255,255,0.1)] before:backdrop-blur-xl before:transition-all before:duration-300 before:content-[''] md:before:hover:bg-[rgb(255,255,255,0.3)]">
              <CardBody className='relative flex h-full w-auto flex-col justify-between rounded-xl p-6'>
                <CardItem
                  translateZ='50'
                  className='service_title text-xl transition-all'>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-md bg-[#8b0000] p-3">
                      <RocketIcon className="h-6 w-6" />
                    </div>
                    <h3 className='project_title text-xl font-black text-white transition-all group-hover:text-2xl md:group-hover:text-red-900'>Desarrollo Web</h3>
                  </div>
                  <p className='my-2 max-w-sm text-sm md:text-base'>
                    Desarrollo sitios web robustos y escalables, incluyendo landing pages, páginas de contacto y sitios multipágina. 
                    <br />
                    Utilizo las últimas tecnologías para garantizar rendimiento, seguridad y capacidad de crecimiento según las necesidades de tu negocio.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer
              id={'Accesibilidad_Web'}
              className="inter-var service_card_container group transition-all before:absolute before:h-full before:w-full before:rounded-xl before:border before:bg-[rgb(255,255,255,0.1)] before:backdrop-blur-xl before:transition-all before:duration-300 before:content-[''] md:before:hover:bg-[rgb(255,255,255,0.3)]">
              <CardBody className='relative flex h-full w-auto flex-col justify-between rounded-xl p-6'>
                <CardItem
                  translateZ='50'
                  className='service_title text-xl transition-all'>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="rounded-md bg-[#8b0000] p-3">
                      <BoltIcon className="h-6 w-6" />
                    </div>
                    <h3 className='project_title text-xl font-black text-white transition-all group-hover:text-2xl md:group-hover:text-red-900'>Accesibilidad Web</h3>
                  </div>
                  <p className='my-2 max-w-sm text-sm md:text-base'>
                    Aseguro que tu sitio web sea accesible para todos los usuarios, cumpliendo con las normas y estándares de accesibilidad.
                    <br />
                    Esto incluye optimización para lectores de pantalla, navegación por teclado y otros ajustes necesarios para una experiencia inclusiva.
                  </p>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>
    </div>
  )
}

function BoltIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}