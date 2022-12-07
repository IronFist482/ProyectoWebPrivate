import styles from '../styles/Quimica1.module.css'
import HeaderMaterias from '../src/components/HeaderMaterias'
import Menu from "../src/components/Menu"
import iron from '../config/session'

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
          <div className={styles.contenedorDatos}><div className={styles.tituloVideos}>Unidad I</div><div className={styles.descripcionVideos}>{unidad1}</div></div>
          <div className={styles.contenedorDatos}><div className={styles.tituloVideos}>Unidad II</div><div className={styles.descripcionVideos}>{unidad2}</div></div>
          <div className={styles.contenedorDatos}><div className={styles.tituloVideos}>Unidad III</div><div className={styles.descripcionVideos}>{unidad3}</div></div>
        </div>
        <div className={styles.contenedorCompetenciasUnidades2}>
          <div className={styles.contenedorDatos}><div className={styles.tituloVideos}>Unidad IV</div><div className={styles.descripcionVideos}>{unidad4}</div></div>
          <div className={styles.contenedorDatos}><div className={styles.tituloVideos}>Unidad V</div><div className={styles.descripcionVideos}>{unidad5}</div></div>
          <div className={styles.contenedorDatos}><div className={styles.tituloVideos}>Unidad VI</div><div className={styles.descripcionVideos}>{unidad6}</div></div>
        </div>
        

        <HeaderMaterias encabezado="Quimica I" linkVideos="/VideosQuimica1" linkDocumentos="/DocumentosQuimica1" linkMinijuegos="/MinijuegosQuimica1"></HeaderMaterias>
        <Menu></Menu>
        
        
    </>
  )
}
export const getServerSideProps = iron(async({req,res}:any)=>{
  const session = req.session.get('user')
  if(!session){
    res.statusCode = 302;
    res.setHeader('Location', '/Login')
    res.end()
    return {props:{}}
  }
  return {
    props: {session:session}
  }
  
})