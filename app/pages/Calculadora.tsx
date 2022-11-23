import React from 'react'
import '../styles/Index.module.css'
import HeaderGeneral from './HeaderGeneral'
import Menu from "./Menu"

export default function Calculadora(){
  return (
    <>
        <div className='circulo-verde04'></div>
        <div className='circulo-morado02'></div>
        <div className='circulo-verde03'></div>
        <div className='circulo-verde05'></div>
        <div className='circulo-morado03'></div>
        <HeaderGeneral></HeaderGeneral>
        <div className='paginaHeader'>Calculadora</div>
        <Menu></Menu>
    </>
  )
}
