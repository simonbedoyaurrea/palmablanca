import { useState } from 'react'
import Nav from './components/Nav'
import './styles/app.css'
import Hero from './components/hero'
import Beneficios from './components/Beneficios'
import Receta from './components/Receta'
import CarruselRecetas from './components/CarruselRecetas'
import Footer from './components/footer'
import IconoWp from './components/iconoWp'

function App() {
  

  return (
    <>
      <Nav />
      <Hero />
      <Beneficios />
      <CarruselRecetas/>
      <Footer />
      <IconoWp />
    </>
  )
}

export default App
