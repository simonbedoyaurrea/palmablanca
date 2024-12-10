import React from 'react'
import presentacion from '../assets/pictures/presentacion.png'
import logo from '../assets/pictures/5-removido.png'
import { GiPalmTree } from 'react-icons/gi'
import '../styles/presentaciones.css'


export default function Presentaciones() {
  return (
    <div className="contenedor-presentaciones">
        <img src={presentacion} alt="presentaciones" className='imagen-presentacion' />
        <div className='contenedor-info-presentaciones'>
            <img src={logo} alt="logo" className='logo-presentaciones' />
            <ul>
                <li>250g         $10000</li>
                <li>450g         $20000</li>
                <li>1kg          $30000</li>
            </ul>
            <GiPalmTree  className='palmerita'/>
        </div>
    </div>
  )
}
