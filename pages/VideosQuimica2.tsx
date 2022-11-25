
import HeaderVideos from '../src/components/HeaderComplementos'
import HeaderUnidades2 from '../src/components/HeaderUnidades1'
import Menu from "../src/components/Menu"
import UnidadI from '../src/components/UnidadI'

export default function VideosQuimica2(){
  return (
    <>
        <div className='circulo-verde04'></div>
        <div className='circulo-morado02'></div>
        <div className='circulo-verde03'></div>
        <div className='circulo-verde05'></div>
        <div className='circulo-morado03'></div>
        <HeaderVideos encabezado="Videos Quimica II"></HeaderVideos>
        <HeaderUnidades2></HeaderUnidades2> 
        <UnidadI></UnidadI>
        <Menu></Menu>
    </>
  )
}