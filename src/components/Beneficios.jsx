import React from 'react'
import '../styles/beneficios.css'
import beneficios from '../models/beneficios.json'
import ContenedorBeneficio from './ContenedorBeneficio'
import { motion } from 'motion/react'
import palmera1 from '../assets/pictures/palmeragrande.png'
import palmera2 from '../assets/pictures/palmerapequeña.png'




export default function Beneficios() {
  return (
    <motion.div
            className='contenedor-beneficios'
            initial={{ opacity: 0, y: 50 }} // Estado inicial
            whileInView={{ opacity: 1, y: 0 }} // Cuando entra en la vista
            transition={{ duration: 0.8, ease: "easeOut" }} // Transición suave
            viewport={{ once: true, amount: 0.2 }} // Opciones de visibilidad
        >
        <h2 className="titulo-beneficios">¿Por qué cambiarse a <br/>harina de coco PALMABLANCA?</h2>
        <img className="palmera-izquierda" src={palmera1} alt="" />
        <div className='carrusel-beneficios'>
          {beneficios.map(beneficio=><ContenedorBeneficio beneficio={beneficio} /> )}
        </div>
        <img className="palmera-derecha" src={palmera2} alt="" />
    </motion.div>
    
  )
}
 