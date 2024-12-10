import React from 'react'
import '../styles/contenedor-beneficio.css'
import glutenIcon from '../assets/icons/gluten.png'
import fibraIcon from '../assets/icons/fibra.png'
import nutrientesIcon from '../assets/icons/nutrientes.webp'
import antioxidanteIcon from '../assets/icons/antioxidantes.png'
import ecologicoIcon from '../assets/icons/ecologico.png'
import azucarIcon from '../assets/icons/azucar.png'
import grasasIcon from '../assets/icons/grasa.png'








export default function ContenedorBeneficio({beneficio}) {

    const iconMap = {
        gluten: glutenIcon,
        fibra: fibraIcon,
        nutrientes:nutrientesIcon,
        antioxidante:antioxidanteIcon,
        ecologico:ecologicoIcon,
        azucar:azucarIcon,
        grasas:grasasIcon
      };

      
  return (
    <div className='contenedor-beneficio'>
        <h3>{beneficio.beneficio}</h3>
        <img className='icono-beneficio' src={iconMap[beneficio.icono]} alt={beneficio.beneficio} />
    </div>
  )
}
