import styles from '../styles/HeaderMaterias.module.css'
import { TbVideo } from "react-icons/tb";
import Link from "next/link"
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor } from 'react';
import { UrlObject } from 'url';

export default function HeaderMaterias(props: { encabezado: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; linkVideos: string | UrlObject; linkDocumentos: string | UrlObject; linkMinijuegos: string | UrlObject; }) {
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
