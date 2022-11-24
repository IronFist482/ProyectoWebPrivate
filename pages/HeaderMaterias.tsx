import styles from '../styles/HeaderMaterias.module.css'
import { TbVideo } from "react-icons/tb";
import Link from "next/link"

export default function HeaderMaterias(props) {
  return (
    <>
      <div className="contenedorHeader">
        <header>
          <div className='paginaHeader'>{props.encabezado}</div>
          <Link href={props.linkVideos}><div className="posicionVideos">Videos</div></Link>
          <Link href={props.linkDocumentos}><div className="posicionDocumentos">Documentos</div></Link>
          <Link href={props.linkMinijuegos}><div className="posicionMinijuegos">Minijuegos</div></Link>
          
        <div className="logoHeader"></div>
        </header>
      </div>
    </>
  );
}
