import React from 'react'
import recetas from '../models/recetas.json'
import Receta from './Receta'

export default function CarruselRecetas() {
  return (
    <div style={{display:"flex",gap:"10px",flexWrap:"wrap",width:"80%",margin:'auto',justifyContent:'center'}}>
        {recetas.map(receta=><Receta receta={receta} />)}
    </div>
  )
}
