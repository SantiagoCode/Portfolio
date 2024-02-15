import React from 'react'
import FullSection from '@/components/FullSection'
import Image from 'next/image'
import Link from 'next/link'

const Portfolio = () => {

  return (
    <FullSection clases='mb-32'>
      
      <h1 className="text-4xl mb-2">Portafolio</h1>
      <p className='text-sm mb-10 w-2/3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, commodi dignissimos. Laboriosam ducimus nesciunt saepe facere nisi quas, magnam consequatur, enim vero voluptates magni quos debitis praesentium, earum libero ex!</p>
      <ProjectCard />

    </FullSection>
  )
}

const ProjectCard = () => {
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full'>
      <Link href='https://santiagosalazar.vercel.app/' className='ProjectCard col-span-1 px-4 py-6 bg-slate-900 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600'>
        <h2 className='text-lg'>
            {/* <Icon.Book size={24} /> */}
            Portafolio
        </h2>
        <h3 className='text-sm'>Web application for notes and tasks</h3>
        <Image
          src={`/image/todoreactapp.jpg`}
          alt="Santiago Picture"
          className="santiago_picture rounded mx-auto w-full mt-2 mb-2"
          width={100}
          height={40}
          priority
        />
        <ul>
          <li className='text-xs'>TypeScript</li>
          <li className='text-xs'>Tailwind CSS</li>
          <li className='text-xs'>React JS</li>
          <li className='text-xs'>Next JS</li>
        </ul>
      </Link>
      <Link href='https://todo-vite-app.vercel.app/' className='ProjectCard col-span-1 px-4 py-6 bg-slate-900 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600'>
        <h2 className='text-lg'>
            {/* <Icon.Book size={24} /> */}
            Todo-ReactApp
        </h2>
        <h3 className='text-sm'>Web application for notes and tasks</h3>
        <Image
          src={`/image/todoreactapp.jpg`}
          alt="Santiago Picture"
          className="santiago_picture rounded mx-auto w-full mt-2 mb-2"
          width={100}
          height={40}
          priority
        />
        <ul>
          <li className='text-xs'>JavaScript</li>
          <li className='text-xs'>Bulma CSS</li>
          <li className='text-xs'>React JS</li>
          <li className='text-xs'>Vite</li>
        </ul>
      </Link>
      <Link href='https://vercel-nextjs-course-blush.vercel.app/' className='ProjectCard col-span-1 px-4 py-6 bg-slate-900 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600'>
        <h2 className='text-lg'>
            {/* <Icon.Book size={24} /> */}
            NextJS-VercelCourse
        </h2>
        <h3 className='text-sm'>Web application for notes and tasks</h3>
        <Image
          src={`/image/todoreactapp.jpg`}
          alt="Santiago Picture"
          className="santiago_picture rounded mx-auto w-full mt-2 mb-2"
          width={100}
          height={40}
          priority
        />
        <ul>
          <li className='text-xs'>TypeScript</li>
          <li className='text-xs'>Tailwind CSS</li>
          <li className='text-xs'>React JS</li>
          <li className='text-xs'>Next JS</li>
        </ul>
      </Link>
      <Link href='https://github.com/SantiagoCode/CreateTxt' className='ProjectCard col-span-1 px-4 py-6 bg-slate-900 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600'>
        <h2 className='text-lg'>
            {/* <Icon.Book size={24} /> */}
            CreateTXT
        </h2>
        <h3 className='text-sm'>Web application for notes and tasks</h3>
        <Image
          src={`/image/todoreactapp.jpg`}
          alt="Santiago Picture"
          className="santiago_picture rounded mx-auto w-full mt-2 mb-2"
          width={100}
          height={40}
          priority
        />
        <ul>
          <li className='text-xs'>C#</li>
          <li className='text-xs'>.NET</li>
        </ul>
      </Link>
    </div>
  )
}

export default Portfolio