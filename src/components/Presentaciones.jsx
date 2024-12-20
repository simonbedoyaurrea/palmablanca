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
                <li>250g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$6,500</li>
                <li><p>450g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{opacity:'.6',textDecoration:'line-through'}}>$10,400</span><br/> precio de lanzamiento: $9,000 </p></li>
                <li><p>1kg&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{opacity:'.6',textDecoration:'line-through'}}>$21,200</span><br/>precio de lanzamiento: $19,500</p> </li>
            </ul>
            <GiPalmTree  className='palmerita'/>
        </div>
    </div>
    </>
  )
}
