import React from 'react'
import FullSection from '@/components/FullSection'
import Image from 'next/image'

const AboutMe = () => {

  return (
    <FullSection>
      
      <AboutSantiago />
      <SantiagoExperience />

    </FullSection>
  )
}

export default AboutMe

const AboutSantiago = () => {
  return (
    <section id='AboutSantiago' className='santiago_section'>
      <div className="santiago_container items-center  grid gap-4 grid-cols-5">
        <Image
          src={`/image/santiago-pic-1.jpg`}
          alt="Santiago Picture"
          className="santiago_picture col-span-2 rounded-lg"
          width={400}
          height={800}
          priority
        />
        <div className="santiago_content col-span-3 text-right">
          <h1 className="title text-4xl mb-4">
            Hello, im Santiago Salazar
          </h1>
          <p>Soy un FrontEnd Developer con experiencia en proyectos web de alta
          exigencia, destaco por integrarme rápidamente a equipos multidisciplinarios,
          generando impacto positivo con análisis precisos y soluciones eficientes. He
          liderado proyectos exitosos, facilitando la comunicación entre clientes y equipos
          de desarrollo. Mi enfoque está en el desarrollo FrontEnd, buscando contribuir con
          soluciones simples y interfaces intuitivas. Busco un equipo donde pueda seguir
          creciendo profesionalmente y aportar con pasión y compromiso.</p>
        </div>
      </div>
    </section>
  )
}

const ExperienceResume = () => {
  return (
    <div className="santiago_content col-span-3">
      <h1 className="title text-4xl mb-4">
        Experience Resume
      </h1>
      <p>Soy un FrontEnd Developer con experiencia en proyectos web de alta
      exigencia, destaco por integrarme rápidamente a equipos multidisciplinarios,
      generando impacto positivo con análisis precisos y soluciones eficientes. He
      liderado proyectos exitosos, facilitando la comunicación entre clientes y equipos
      de desarrollo. Mi enfoque está en el desarrollo FrontEnd, buscando contribuir con
      soluciones simples y interfaces intuitivas. Busco un equipo donde pueda seguir
      creciendo profesionalmente y aportar con pasión y compromiso.</p>
    </div>
  )
}

const TimeLine = () => {
  return (
    <div className="col-span-2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">Movidagrafica.co</div>
                    <time className="font-caveat font-medium text-indigo-500">2022 - 2023</time>
                </div>
                <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
            </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">Radikal Agencie</div>
                    <time className="font-caveat font-medium text-indigo-500">2022</time>
                </div>
                <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
            </div>
        </div>
        
        {/* <div className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">Ingenieria en sistemas</div>
                    <time className="font-caveat font-medium text-indigo-500">2022 - 2026</time>
                </div>
                <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
            </div>
        </div> */}
    </div>
  )
}

const SantiagoExperience = () => {
  return (
    <div className='experience_container items-center  grid gap-4 grid-cols-5'>
      <ExperienceResume />
      <TimeLine />
    </div>
  )
}
