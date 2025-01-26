import React, { useState } from 'react'
import recetas from '../models/recetas.json'
import Receta from './Receta'
import '../styles/carrusel-recetas.css'
import { GiCampCookingPot } from 'react-icons/gi'


export default function CarruselRecetas() {

  const [masRecetas,setMasRecetas]=useState(false)

  return (
    <div className='contenedor-recetas'>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',boxSizing:'border-box'}}>
        <h2 className='titulo-recetas'>Recetas</h2>
        <GiCampCookingPot className='receta-icono' />
      </div>
      <div className='contenedor-carrusel-recetas'>
          {recetas.slice(0,masRecetas?recetas.length:4).map(receta=><Receta receta={receta} />)}
      </div>
      {recetas.length>5?<button className='boton-ver-mas' onClick={()=>setMasRecetas(!masRecetas)} >{masRecetas?'ver menos':'ver más recetas'}</button>:null}
    </div>
  )
}
