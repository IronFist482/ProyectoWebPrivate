import React from 'react'
import styles from '../styles/Cuenta.module.css'
import Menu from '../src/components/Menu'
import Sidebar from '../src/components/Sidebar'

export default function Cuenta() {
  return (
    <div className={styles.contenedor}>
      <Sidebar></Sidebar>
      <Menu></Menu>
    </div>
  )
}
