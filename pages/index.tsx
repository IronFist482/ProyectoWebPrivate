import HeaderPrincipal from "../components/HeaderPrincipal"
import styles from '../styles/Home.module.css'
import { TbNotebook, TbTools, TbChartLine, TbUser,TbFileUpload,TbSearch} from "react-icons/tb"

export default function Home() {
  return (
    <>
      <div className="circulo-morado00"></div>
      <div className="circulo-verde001"></div>
      <div className="circulo-verde002"></div>
      <HeaderPrincipal></HeaderPrincipal>
      <div className={styles.contenedorPrincipal}>
        <div className={styles.contenedor1}>
          <div className={styles.contenedorTitulo}>Herramientas</div>
          <div className={styles.links}><TbTools className={styles.links}/></div>
          <div className={styles.contenedorCentro}>Tenemos una tabla periódica, con la que podrás tomar datos de un elemento.</div>
        </div>
        <div className={styles.contenedor2}>
          <div className={styles.contenedorTitulo}>Material</div>
          <div className={styles.links}><TbFileUpload className={styles.links}/></div>
          <div className={styles.contenedorCentro}>Puedes consultar videos, documentos o incluso juegos.</div>
        </div>
        <div className={styles.contenedor3}>
          <div className={styles.contenedorTitulo}>Seguimiento</div>
          <div className={styles.links}><TbSearch className={styles.links}/></div>
          <div className={styles.contenedorCentro}>Se va a aplicar cuestionarios para que sea visible la mejoría</div>
        </div>
      </div>
    </>
  )
}
