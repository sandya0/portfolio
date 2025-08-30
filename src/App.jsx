import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main>
      <div className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      </div>
    </main>
  )
}

export default App
