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
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Progress />
        <Pillars />
        <Technologies />
        <Values />
        <Benefits />
        <Competition />
        <UseCases />
        <Dashboards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
