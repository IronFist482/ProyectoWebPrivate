import styles from '../styles/VideosQuimica.module.css'
import React from 'react'

export default function Unidad1() {
  return (
    <div>
      <div className='division1'>UNIDAD I</div>
        <div className='contenedordivision1'>
          <div className='tituloVideo1'>⚖️ BALANCEO de ecuaciones por TANTEO </div>
          <div className='descripcionVideo1'>Aquí va la descripcion</div>
          <div className='contenedorVideo1'>
            <iframe className='video' src="https://www.youtube.com/embed/wl_HCBxpBs0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <div className='tituloVideo2'>Titulo 2</div>
          <div className='descripcionVideo2'>Aquí va la descripcion</div>
          <div className='contenedorVideo2'>
            <iframe className='video' src="https://www.youtube.com/embed/wl_HCBxpBs0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <div className='tituloVideo3'>Titulo 3</div>
          <div className='descripcionVideo3'>Aquí va la descripcion</div>
          <div className='contenedorVideo3'></div>
          <div className='tituloVideo4'>Titulo 4</div>
          <div className='descripcionVideo4'>Aquí va la descripcion</div>
          <div className='contenedorVideo4'></div>
        </div>
    </div>
  )
}
