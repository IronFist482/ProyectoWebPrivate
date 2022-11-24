import "../../styles/Index.module.css"
import HeaderMaterias from '../src/components/HeaderMaterias'
import Menu from "../src/components/Menu"

export default function Quimica1(){
  const unidad1="Plantea medidas preventivas y correctivas para el uso racional de la masa y la energía."
  const unidad2="Emite juicios de valor sobre el uso del átomo en diferentes campos de la ciencia"
  const unidad3="Maneja la tabla periódica como fuente de información"
  const unidad4="Propone productos con base en el tipo de enlace químico para aplicar en la vida cotidiana"
  const unidad5="Emplea el lenguaje químico para nombrar diferentes compuestos inorgánicos, identificando su uso y riesgos en su entorno"
  const unidad6="Plantea alternativas referentes a la reactividad entre diversas sustancias y su impacto ambiental"
  return (
    <>
        <div className='circulo-verde04'></div>
        <div className='circulo-morado02'></div>
        <div className='circulo-verde03'></div>
        <div className='circulo-verde05'></div>
        <div className='circulo-morado03'></div>
        
        <div className='tituloTemario'>Competencias Particulares</div>
        <div className='contenedorCompetencia1'><div className='textoCompetencia'>Unidad I</div><div className='textoComp'>{unidad1}</div></div>
        <div className='contenedorCompetencia2'><div className='textoCompetencia'>Unidad II</div><div className='textoComp'>{unidad2}</div></div>
        <div className='contenedorCompetencia3'><div className='textoCompetencia'>Unidad III</div><div className='textoComp'>{unidad3}</div></div>
        <div className='contenedorCompetencia4'><div className='textoCompetencia'>Unidad IV</div><div className='textoComp'>{unidad4}</div></div>
        <div className='contenedorCompetencia5'><div className='textoCompetencia'>Unidad V</div><div className='textoComp'>{unidad5}</div></div>
        <div className='contenedorCompetencia6'><div className='textoCompetencia'>Unidad VI</div><div className='textoComp'>{unidad6}</div></div>
        <HeaderMaterias encabezado="Quimica I" linkVideos="/VideosQuimica1" linkDocumentos="/DocumentosQuimica1" linkMinijuegos="/MinijuegosQuimica1"></HeaderMaterias>
        <Menu></Menu>
        
    </>
  )
}