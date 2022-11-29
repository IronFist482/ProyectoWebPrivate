import React from 'react'
import styles from '../../styles/Sidebar.module.css'
import Link from 'next/link'
import {TbSettings,TbUserCircle,TbTimeline,TbShieldLock} from 'react-icons/tb'

export default function Sidebar() {
  return (
    <div className={styles.sidebarContenedor}>
        <div className={styles.divLogo}>Configuración</div>
        <hr className={styles.rayita}/>
        <Link className={styles.divOpcionesPerfil} href={"./Configuracion"}>Opciones<TbSettings className={styles.icons}/></Link>
        <Link className={styles.divOpcionesCuenta} href={"./Cuenta"}>Cuenta<TbUserCircle className={styles.icons}/></Link>
        <Link className={styles.divOpcionesProgreso} href={"./Progresion"}>Progreso<TbTimeline className={styles.icons}/></Link>
        <hr className={styles.rayitaBaja} />
    </div>
  )
}
