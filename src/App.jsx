import { useState } from 'react'
import Nav from './components/Nav'
import './styles/app.css'
import Hero from './components/Header'
import Beneficios from './components/Beneficios'
import CarruselRecetas from './components/CarruselRecetas'
import Footer from './components/Footer2'
import IconoWp from './components/IconoWhatsapp'
import Presentaciones from './components/Presentaciones'
import IconoIG from './components/IconoIG'

function App() {
  

  return (
    <>
      <Nav />
      <Hero />
      <Beneficios />
      <CarruselRecetas/>
      <Presentaciones />
      <Footer />
      <IconoWp />
      <IconoIG />
    </>
  )
}

export default App
