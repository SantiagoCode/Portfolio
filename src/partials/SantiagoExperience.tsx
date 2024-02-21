import React from 'react'
import FullSection from '@/components/FullSection'


const SantiagoExperience = () => {
  return (
    <FullSection clases='mb-32'>
      <div className='experience_container items-center xl:grid gap-4 grid-cols-5 '>
        <ExperienceResume />
        <TimeLine />
      </div>
    </FullSection>
  )
}

const ExperienceResume = () => {
  return (
    <div className="santiago_content col-span-3 mb-16 xl:mb-0">
      <h1 className="title text-4xl mb-6">
        Algo sobre mi experiencia laboral
      </h1>
      <p>
        Como <span className="text-violet-400">desarrollador FrontEnd apasionado</span>, me he especializado en <span className="text-violet-400">React.js</span>, creando <span className="text-violet-400">experiencias web excepcionales</span> con JavaScript y CSS. En <span className="text-violet-400">Movidagráfica™</span>, tuve la oportunidad de liderar un pequeño equipo en un proyecto de alta exigencia, lo que me permitió demostrar mis habilidades de liderazgo y atención al detalle.
        <br/>
        <br/>
        Mi experiencia también incluye trabajar como <span className="text-violet-400">FrontEnd Developer</span> en <span className="text-violet-400">Studio Salvatori</span>, donde aprendí las bases del desarrollo web. Mis habilidades técnicas y experiencias incluyen: <span className="text-violet-400">React, NextJS, HTML, CSS y SASS, JavaScript y TypeScript, Git y GitHub, WordPress y ACF, Laravel, BootstrapCSS, BulmaCSS y TailwindCSS</span>.
        <br/>
        <br/>
        Además de mi experiencia técnica, poseo una <span className="text-violet-400">certificación de inglés nivel B2</span>, lo que me permite comunicarme eficazmente en un entorno global. Estoy entusiasmado por contribuir al desarrollo de software con soluciones innovadoras, manteniéndome actualizado con las últimas tendencias tecnológicas. ¡Estoy listo para aportar con pasión y compromiso a un equipo donde pueda seguir creciendo profesionalmente!
      </p>

      </div>
  )
}

const TimeLine = () => {
  return (
    <div className="col-span-2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px xl:before:mx-auto xl:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        <div className="relative w-full md:w-2/4 xl:w-full flex items-center justify-between xl:justify-normal xl:even:flex-row-reverse xl:even:text-right group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 xl:order-1 xl:group-odd:-translate-x-1/2 xl:group-even:translate-x-1/2">
                {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg> */}
            </div>
            <div className="w-[calc(100%-4rem)] xl:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow-lg shadow-indigo-700 hover:shadow-indigo-500/50 transition-all duration-300">
                <time className="font-caveat font-medium text-indigo-500 text-xs">2022 - 2023</time>
                <div className="font-bold text-slate-900 text-ms">Movidagrafica.co</div>
                <div className="text-slate-500 text-xs">FullStack developer & Team Leader</div>
            </div>
        </div>

        <div className="relative w-full md:w-2/4 xl:w-full flex items-center justify-between xl:justify-normal xl:even:flex-row-reverse xl:even:text-right group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 xl:order-1 xl:group-odd:-translate-x-1/2 xl:group-even:translate-x-1/2">
                {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                    <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg> */}
            </div>
            <div className="w-[calc(100%-4rem)] xl:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow-lg shadow-indigo-700 hover:shadow-indigo-500/50 transition-all duration-300">
                <time className="font-caveat font-medium text-indigo-500 text-xs">2022</time>
                <div className="font-bold text-slate-900 text-ms">Radikal Agencie</div>
                <div className="text-slate-500 text-xs">FrontEnd developer</div>
            </div>
        </div>
    </div>
  )
}

export default SantiagoExperience