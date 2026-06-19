import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { News } from './components/sections/News'
import { Teachers } from './components/sections/Teachers'
import { Achievements } from './components/sections/Achievements'
import { Gallery } from './components/sections/Gallery'
import { Contact } from './pages/Contact'
import { Auth } from './pages/Auth'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle anchor links for lenis
    const handleHashChange = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.hash && link.hash.startsWith('#')) {
        const id = link.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -80 }); // offset for header
        }
      }
    };

    document.addEventListener('click', handleHashChange);

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleHashChange);
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <News />
            <Teachers />
            <Achievements />
            <Gallery />
          </main>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
