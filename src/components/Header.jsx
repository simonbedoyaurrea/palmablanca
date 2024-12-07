import React from 'react'
import harinaCoco from '../assets/pictures/harinacoco.webp';
import '../styles/hero.css'


export default function Hero() {
  return (

        <div className="contenedor-hero" style={{
        backgroundImage: `url(${harinaCoco})`
        }}>
          <p className='texto-hero'><strong>PALMABLANCA</strong> <br/> Harina de coco pura, rica en fibra y perfecta para tu bienestar</p>
        </div>
  )
}