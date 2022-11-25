import React from 'react'
import styles from '../styles/Configuracion.module.css'
import Menu from "../src/components/Menu"
import Sidebar from "../src/components/Sidebar"

export default function Configuracion(){
  return (
    <div className={styles.contenedor}>
      
      <div className='circulo-verde04'></div>
      <div className='circulo-morado02'></div>
      <div className='circulo-verde03'></div>
      <div className='circulo-verde05'></div>
      <div className='circulo-morado03'></div>
      <div className={styles.barraLateralSolida}></div>
      <div className={styles.contenedorConfiguracion}>
        <Sidebar></Sidebar>
        <div className={styles.divContenidoGeneral}>
          <div className={styles.titulo}>Configuración</div>
          <div className={styles.divExplicacion}>Esta sección es para modificar datos del usuario</div>
          <div className={styles.divOpcion}>Correo</div>
          <form className={styles.contenedorCorreo}>
            <input type="email" className={styles.inputCorreo} placeholder='Correo anterior'/>
            <input type="email" className={styles.inputCorreo} placeholder='Correo nuevo'/>
            <button className={styles.saveCorreo}>Guardar</button>
          </form>
          <div className={styles.divOpcion}>Contraseña</div>
          <div className={styles.contenedorCorreo}>
            
          </div> 
        </div>
      </div>
      <Menu></Menu>
    </div>
  )
}
