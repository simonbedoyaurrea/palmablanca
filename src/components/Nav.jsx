import { useEffect, useState } from 'react';
import '../styles/Nav.css'
import { GiPalmTree } from 'react-icons/gi';
import logo from '../assets/pictures/5-removido.png'




export default function Nav({bolsa,setBolsa,totalPagar,setTotalPagar}) {


  return (<>
    <nav>
            <img src={logo} className='imagen-logo' alt="PALMABLANCA" />
    </nav>
    </>
  )
}
