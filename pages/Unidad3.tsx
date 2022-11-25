import HeaderVideos from '../src/components/HeaderComplementos'
import Menu from "../src/components/Menu"
import HeaderUnidades from '../src/components/HeaderUnidades1'

export default function Unidad3() {
  return (
    <div>
      <div className='circulo-verde04'></div>
        <div className='circulo-morado02'></div>
        <div className='circulo-verde03'></div>
        <div className='circulo-verde05'></div>
        <div className='circulo-morado03'></div>
        <HeaderVideos encabezado="Videos Quimica I"></HeaderVideos>
        <HeaderUnidades></HeaderUnidades>
        <div className='division1'>UNIDAD III</div>
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
        <Menu></Menu>
    </div>
  )
}