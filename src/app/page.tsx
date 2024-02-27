"use client"

import { useEffect } from 'react'
import AboutMe from '@/partials/AboutMe'
import Hero from '@/partials/Hero'
import Portfolio from '@/partials/Portfolio'
import PracticesAndArticles from '@/partials/PracticesAndArticles'
import SantiagoExperience from '@/partials/SantiagoExperience'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <>
      <Hero />
      <AboutMe />
      <Portfolio />
      <PracticesAndArticles />
      <SantiagoExperience />
    </>
  )
}
