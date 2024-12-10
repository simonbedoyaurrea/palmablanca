import { useEffect, useState } from 'react';
import '../styles/Nav.css'
import { GiPalmTree } from 'react-icons/gi';
import logo from '../assets/pictures/5-removido.png'




export default function Nav() {


  return (<>
    <nav>
            <img src={logo} className='imagen-logo' alt="logo PALMABLANCA" />
    </nav>
    </>
  )
}
