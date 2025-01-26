import React, { useState } from 'react'
import '../styles/receta.css'
import { CiClock1 } from 'react-icons/ci'
import { BiBook } from 'react-icons/bi'
import { FaYoutube } from 'react-icons/fa'




export default function Receta({receta}) {

  let iconoFuente

  switch (receta.plataforma) {
    case "texto":
      iconoFuente=<BiBook />
      break;
      
    case "youtube":
      iconoFuente=<FaYoutube/>
      break;
    default:
      break;
  }
  return (
        <div className='contenedor-receta'>
            <a target='_blank' href={receta.link} >
            <img className='imagen-receta' src={receta.imagen} alt={receta.nombre} />
            <div className='info-receta'>
                <h3 className='nombre-receta'>{receta.nombre}</h3>
                <div className='info-receta-tiempo-fuente'>
                  <p style={{display:'flex',alignItems:'center'}}><CiClock1/>{receta.tiempo }</p>
                  <div>{iconoFuente}</div>
                </div>
            </div>
            </a>
        </div>
  )
}
