import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import About from './components/About'
import SelectedWorks from './components/SelectedWorks'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Journal from './components/Journal'
import Explorations from './components/Explorations'
import Stats from './components/Stats'
import Contact from './components/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <main className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Hero />
        <About />
        <SelectedWorks />
        <Skills />
        <Experience />
        <Journal />
        <Explorations />
        <Stats />
        <Contact />
      </main>
    </>
  )
}

export default App
