import React from 'react'
import styles from '../../styles/Cuenta.module.css'
import Menu from './Menu'
import Sidebar from './Sidebar'

export default function Cuenta() {
  return (
    <div className={styles.contenedor}>
      <Sidebar></Sidebar>
      <Menu></Menu>
    </div>
  )
}
