import React from 'react'
import FullSection from '@/components/FullSection'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <FullSection clases='mb-32'>
      <AboutSantiago />
    </FullSection>
  )
}

const AboutSantiago = () => {
  return (
    <section id='AboutSantiago' className='santiago_section mb-32 xl:mb-0'>
      <div className="santiago_container items-center xl:grid gap-4 grid-cols-5">
        <Image
          src={`/image/santiago-pic-1.png`}
          alt="Santiago Picture"
          className="santiago_picture col-span-2 rounded-xl mb-16 xl:mb-12 mx-auto w-full shadow-lg shadow-indigo-700 hover:shadow-indigo-500/50 transition-all duration-300"
          width={400}
          height={800}
          priority
        />
        <div className="santiago_content col-span-3 xl:ml-4">
          <h1 className="title text-4xl mb-6">
            Hello, mi nombre es Santiago Salazar
          </h1>
          <p>
            <span>
              Soy un <span className="text-violet-400">FrontEnd Developer</span> con experiencia en proyectos web de alta
              exigencia, destaco por integrarme rápidamente a equipos multidisciplinarios,
              generando impacto positivo con <span className="text-violet-400">análisis precisos y soluciones eficientes</span>. 
            </span>  
            <br/>
            <br/>
            <span>
              He <span className="text-violet-400">liderado proyectos exitosos</span>, facilitando la comunicación entre clientes y equipos
              de desarrollo. Mi enfoque está en el desarrollo FrontEnd, buscando contribuir con
              soluciones simples y interfaces intuitivas. Busco un equipo donde pueda seguir
              creciendo profesionalmente y aportar con pasión y compromiso.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe