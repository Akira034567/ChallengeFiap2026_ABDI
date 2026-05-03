import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Progress from './components/Progress'
import Pillars from './components/Pillars'
import Technologies from './components/Technologies'
import Values from './components/Values'
import Benefits from './components/Benefits'
import Competition from './components/Competition'
import UseCases from './components/UseCases'
import Dashboards from './components/Dashboards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  return (
    <>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {activeTab === 'overview' ? (
          <>
            <Hero />
            <About />
            <Progress />
            <Technologies />
            <UseCases />
            <Dashboards />
            <Contact />
          </>
        ) : (
          <section id="conheca-mais">
            <Pillars />
            <Values />
            <Benefits />
            <Competition />
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
