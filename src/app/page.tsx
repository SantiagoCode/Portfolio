"use client"

import { useEffect } from 'react'
import AboutMe from '@/partials/AboutMe'
import Contact from '@/partials/Contact'
import Hero from '@/partials/Hero'
import Portfolio from '@/partials/Portfolio'
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
      <SantiagoExperience />
      <Portfolio />
      <Contact />
    </>
  )
}
