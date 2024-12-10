import React from 'react'
import recetas from '../models/recetas.json'
import Receta from './Receta'
import '../styles/carrusel-recetas.css'
import { GiCampCookingPot } from 'react-icons/gi'


export default function CarruselRecetas() {
  return (
    <div className='contenedor-recetas'>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',boxSizing:'border-box'}}>
        <h2 className='titulo-recetas'>Recetas</h2>
        <GiCampCookingPot className='receta-icono' />
      </div>
      <div className='contenedor-carrusel-recetas'>
          {recetas.map(receta=><Receta receta={receta} />)}
      </div>
    </div>
  )
}
