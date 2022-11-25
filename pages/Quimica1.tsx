import styles from '../styles/Quimica1.module.css'
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
        <div className={styles.divTitulo}>Competencias Particulares</div>
        <div className={styles.contenedorCompetenciasUnidades1}>
          <div className={styles.contenedorDatos}></div>
          <div className={styles.contenedorDatos}></div>
          <div className={styles.contenedorDatos}></div>
        </div>
        <div className={styles.contenedorCompetenciasUnidades2}>
          <div className={styles.contenedorDatos}></div>
          <div className={styles.contenedorDatos}></div>
          <div className={styles.contenedorDatos}></div>
        </div>
        

        <HeaderMaterias encabezado="Quimica I" linkVideos="/VideosQuimica1" linkDocumentos="/DocumentosQuimica1" linkMinijuegos="/MinijuegosQuimica1"></HeaderMaterias>
        <Menu></Menu>
        
        
    </>
  )
}