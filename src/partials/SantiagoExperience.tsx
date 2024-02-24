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
        Something about my work experience
      </h1>
      <p>
        <span>
          As a <span className="text-violet-400">passionate FrontEnd developer</span>, I have specialized in <span className="text-violet-400">React.js</span>, creating <span className="text-violet-400">exceptional web experiences</span> with JavaScript and CSS. At <span className="text-violet-400">Movidagráfica™</span>, I had the opportunity to lead a small team on a high-demand project, allowing me to demonstrate my leadership skills and attention to detail.
        </span>
        <br/>
        <br/>
        <span>
          My experience also includes working as a <span className="text-violet-400">FrontEnd Developer</span> at <span className="text-violet-400">Studio Salvatori</span>, where I learned the fundamentals of web development. My technical skills and experiences include: <span className="text-violet-400">React, NextJS, HTML, CSS and SASS, JavaScript and TypeScript, Git and GitHub, WordPress and ACF, Laravel, BootstrapCSS, BulmaCSS, and TailwindCSS</span>.
        </span>
        <br/>
        <br/>
        <span>
          In addition to my technical experience, I hold a <span className="text-violet-400">B2 level English certification</span>, allowing me to communicate effectively in a global environment. I am excited to contribute to software development with innovative solutions, staying updated with the latest technological trends. I am ready to contribute with passion and commitment to a team where I can continue to grow professionally!
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