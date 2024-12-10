import React from 'react'
import presentacion from '../assets/pictures/presentacion.png'
import logo from '../assets/pictures/5-removido.png'
import { GiPalmTree } from 'react-icons/gi'
import '../styles/presentaciones.css'
import { HiCurrencyDollar } from 'react-icons/hi'
import { PiCurrencyCircleDollarLight } from 'react-icons/pi'


export default function Presentaciones() {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',boxSizing:'border-box',marginTop:'80px'}}>
        <h2 className='titulo-precios'>Precios</h2>
        <PiCurrencyCircleDollarLight className='dinero-icono' />
    </div>
    <div className="contenedor-presentaciones">
        <img src={presentacion} alt="harina de coco palmablanca" className='imagen-presentacion' />
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
    </>
  )
}
