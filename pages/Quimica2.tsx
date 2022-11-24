import "../../styles/Index.module.css"
import HeaderMaterias from '../src/components/HeaderMaterias'
import Menu from "../src/components/Menu"

export default function Quimica2(){
    return (
        <>
            <div className='circulo-verde04'></div>
            <div className='circulo-morado02'></div>
            <div className='circulo-verde03'></div>
            <div className='circulo-verde05'></div>
            <div className='circulo-morado03'></div>
            <div className='tituloTemario'>Competencias Particulares</div>
            <div className='contenedorCompetencia1'><div className='textoCompetencia'>Unidad I</div><div className='textoComp'>Plantea medidas preventivas y correctivas para el uso racional de la masa y la energía.</div></div>
            <div className='contenedorCompetencia2'><div className='textoCompetencia'>Unidad II</div><div className='textoComp'>Emite juicios de valor sobre el uso del átomo en diferentes campos de la ciencia</div></div>
            <div className='contenedorCompetencia3'><div className='textoCompetencia'>Unidad III</div><div className='textoComp'>Maneja la tabla periódica como fuente de información</div></div>
            <div className='contenedorCompetencia4'><div className='textoCompetencia'>Unidad IV</div><div className='textoComp'>Propone productos con base en el tipo de enlace químico para aplicar en la vida cotidiana</div></div>
            <div className='contenedorCompetencia5'><div className='textoCompetencia'>Unidad V</div><div className='textoComp'>Emplea el lenguaje químico para nombrar diferentes compuestos inorgánicos, identificando su uso y riesgos en su entorno</div></div>
            <div className='contenedorCompetencia6'><div className='textoCompetencia'>Unidad VI</div><div className='textoComp'>Plantea alternativas referentes a la reactividad entre diversas sustancias y su impacto ambiental</div></div>
            <HeaderMaterias encabezado="Quimica II" linkVideos="/VideosQuimica2" linkDocumentos="/DocumentosQuimica2" linkMinijuegos="/MinijuegosQuimica2"></HeaderMaterias>
            <Menu></Menu>
        </>
      )
}