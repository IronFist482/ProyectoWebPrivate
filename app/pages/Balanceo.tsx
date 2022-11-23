import React from 'react'
import '../styles/Index.module.css'
import HeaderGeneral from './HeaderGeneral'
import Menu from "./Menu"

export default function Balanceo(){
  return (
    <>
        <div className='circulo-verde04'></div>
        <div className='circulo-morado02'></div>
        <div className='circulo-verde03'></div>
        <div className='circulo-verde05'></div>
        <div className='circulo-morado03'></div>
        <HeaderGeneral></HeaderGeneral>
        <div className='paginaHeader'>Balanceo</div>
        <div className='contenedorBalanceo'>
            <label className='reactivoLabel1'>Reactivo</label>
            <input type="text" className='reactivoInput1' />
            <div className='imagenFlecha1'></div>
            <label className='productoLabel1'>Producto</label>
            <input type="text" className='productoInput1' />
            <input type="button" className='botonBalanceo' value="Balancear" />
        </div>
        <div className='contenedorResultado'>
            <div className='textoResultado'>Resultado</div>
            <label className='reactivoLabel2'>Reactivo</label>
            <input type="text" className='reactivoInput2' disabled/>
            <div className='imagenFlecha2'></div>
            <label className='productoLabel2'>Producto</label>
            <input type="text" className='productoInput2' disabled/>
        </div>
        <div className='contenedorTip1'>
            TIP #1<br></br><br></br>Para balancear de manera más rápida y sencilla deja al final los hidrogenos, ya que estos son más fáciles de ajustar :).
        </div>
        <div className='contenedorTip2'>
        TIP #2<br></br><br></br>Anota el número de átomos de cada lado y busca igualar uno por uno.
        </div>
        <Menu></Menu>
    </>
  )
}

