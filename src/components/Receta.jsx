import React from 'react'
import '../styles/receta.css'
import { CiClock1 } from 'react-icons/ci'

export default function Receta({receta}) {
  return (
        <div className='contenedor-receta'>
            <a target='_blank' href={receta.link} >
            <img className='imagen-receta' src={receta.imagen} alt={receta.nombre} />
            <div className='info-receta'>
                <h3 className='nombre-receta'>{receta.nombre}</h3>
                <p>{receta.tiempo }<CiClock1/></p>
            </div>
            </a>
        </div>
  )
}
