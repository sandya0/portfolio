import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'
import ReactLenis from "lenis/react"
import About from './sections/About'

const App = () => {
  return (
    <main>
      <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <section className="h-screen bg-gray-900"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
      </ReactLenis>

    </main>
  )
}

export default App
