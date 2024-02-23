import React from 'react'
import FullSection from '@/components/FullSection'
import * as Icon from 'react-feather'

const SantiagoExperience = () => {
  return (
    <FullSection clases='mb-12'>
      <div className='experience_container items-center xl:grid gap-4 grid-cols-5'>
        <ExperienceResume />
        <TimeLine />
      </div>
    </FullSection>
  )
}

const ExperienceResume = () => {
  return (
    <div className="santiago_content col-span-3 mb-12 xl:mb-0">
      <h1 className="title text-4xl mb-6">
        Algo sobre mi experiencia laboral
      </h1>
      <p>
        <span>
          Como <span className="text-violet-400">desarrollador FrontEnd apasionado</span>, me he especializado en <span className="text-violet-400">React.js</span>, creando <span className="text-violet-400">experiencias web excepcionales</span> con JavaScript y CSS. En <span className="text-violet-400">Movidagráfica™</span>, tuve la oportunidad de liderar un pequeño equipo en un proyecto de alta exigencia, lo que me permitió demostrar mis habilidades de liderazgo y atención al detalle.
        </span>
        <br/>
        <br/>
        <span>
          Mi experiencia también incluye trabajar como <span className="text-violet-400">FrontEnd Developer</span> en <span className="text-violet-400">Studio Salvatori</span>, donde aprendí las bases del desarrollo web. Mis habilidades técnicas y experiencias incluyen: <span className="text-violet-400">React, NextJS, HTML, CSS y SASS, JavaScript y TypeScript, Git y GitHub, WordPress y ACF, Laravel, BootstrapCSS, BulmaCSS y TailwindCSS</span>.
        </span>
        <br/>
        <br/>
        <span>
          Además de mi experiencia técnica, poseo una <span className="text-violet-400">certificación de inglés nivel B2</span>, lo que me permite comunicarme eficazmente en un entorno global. Estoy entusiasmado por contribuir al desarrollo de software con soluciones innovadoras, manteniéndome actualizado con las últimas tendencias tecnológicas. ¡Estoy listo para aportar con pasión y compromiso a un equipo donde pueda seguir creciendo profesionalmente!
        </span>
      </p>

      </div>
  )
}

const TimeLine = () => {
  return (
    <div className="col-span-2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px xl:before:mx-auto xl:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <Experience date={"2022 - 2023"} agencie={"Movidagrafica.co"} position={"FullStack developer & Team Leader"} />
        <Experience date={"2022"} agencie={"Radikal Agencies"} position={"FrontEnd developer"} />
    </div>
  )
}

const Experience = ({ date, agencie, position }: { date: string, agencie: string, position: string }) => {
  return (
    <div className="relative w-full md:w-2/4 xl:w-full flex items-center justify-between xl:justify-normal xl:even:flex-row-reverse xl:even:text-right group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 xl:order-1 xl:group-odd:-translate-x-1/2 xl:group-even:translate-x-1/2">
          <Icon.Check size={21} />
      </div>
      <div className="w-[calc(100%-4rem)] xl:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow-lg shadow-indigo-700 hover:shadow-indigo-500/50 transition-all duration-300">
          <time className="font-caveat font-medium text-indigo-500 text-xs">
            {date}
          </time>
          <div className="font-bold text-slate-900 text-ms">
            {agencie}
          </div>
          <div className="text-slate-500 text-xs">
            {position}
          </div>
      </div>
    </div>
  )
}

export default SantiagoExperience