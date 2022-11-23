import style from '../styles/Test.module.css'
import Preguntas from './Preguntas'
import Link from 'next/link'
import Script from 'next/script'

export default function Test(){


  return (
    <div className={style.contenedor}>
      <div className={style.circuloVerde00}></div>
      <div className={style.circuloVerde01}></div>
      <div className={style.circuloMorado00}></div>
      <div className={style.divContenedorPrincipal}>
        <div className={style.titulo}>Test</div>
        <div className={style.divContenedorPregunta}>
          <Preguntas></Preguntas>
        </div>
      </div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></Script>
    </div>
  )
}