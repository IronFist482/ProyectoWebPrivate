
import HeaderMaterias from '../src/components/HeaderMaterias'
import Menu from "../src/components/Menu"
import styles from '../styles/Quimica2.module.css'

export default function Quimica2(){
  const unidad1="Plantea medidas preventivas y correctivas para el uso racional de la masa y la energía."
  const unidad2="Emite juicios de valor sobre el uso del átomo en diferentes campos de la ciencia"
  const unidad3="Maneja la tabla periódica como fuente de información"
  const unidad4="Propone productos con base en el tipo de enlace químico para aplicar en la vida cotidiana"
    return (
        <>
            <div className='circulo-verde04'></div>
            <div className='circulo-morado02'></div>
            <div className='circulo-verde03'></div>
            <div className='circulo-verde05'></div>
            <div className='circulo-morado03'></div>
            <div className={styles.divTitulo}>Competencias Particulares</div>
            <div className={styles.contenedorCompetenciasUnidades1}>
                <div className={styles.contenedorDatos}></div>
                <div className={styles.contenedorDatos}></div>
            </div>
            <div className={styles.contenedorCompetenciasUnidades2}>
                <div className={styles.contenedorDatos}></div>
                <div className={styles.contenedorDatos}></div>
            </div>
            <HeaderMaterias encabezado="Quimica II" linkVideos="/VideosQuimica2" linkDocumentos="/DocumentosQuimica2" linkMinijuegos="/MinijuegosQuimica2"></HeaderMaterias>
            <Menu></Menu>
        </>
      )
}