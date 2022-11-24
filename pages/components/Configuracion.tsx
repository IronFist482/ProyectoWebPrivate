import React from 'react'
import styles from '../../styles/Configuracion.module.css'
import Menu from "./Menu"
import Sidebar from "./Sidebar"

export default function Configuracion(){
  return (
    <div className={styles.contenedor}>
      
      <div className='circulo-verde04'></div>
      <div className='circulo-morado02'></div>
      <div className='circulo-verde03'></div>
      <div className='circulo-verde05'></div>
      <div className='circulo-morado03'></div>
      <div className={styles.barraLateralSolida}></div>
      <Sidebar></Sidebar>
      <div className={styles.contenedorConfiguracion}></div>
      <Menu></Menu>
    </div>
  )
}
