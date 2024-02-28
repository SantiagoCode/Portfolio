"use client"

import AboutMe from '@/partials/AboutMe'
import Hero from '@/partials/Hero'
import Portfolio from '@/partials/Portfolio'
import PracticesAndArticles from '@/partials/PracticesAndArticles'
import SantiagoExperience from '@/partials/SantiagoExperience'
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <ParallaxProvider>
      <Hero />
      <AboutMe />
      <Portfolio />
      <PracticesAndArticles />
      <SantiagoExperience />
    </ParallaxProvider>
  )
}
