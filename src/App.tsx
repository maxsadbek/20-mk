import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { News } from './components/sections/News'
import { Teachers } from './components/sections/Teachers'
import { Achievements } from './components/sections/Achievements'
import { Gallery } from './components/sections/Gallery'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <News />
        <Teachers />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
