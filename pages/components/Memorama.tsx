import Menu from './Menu'
import HeaderGeneral from './HeaderGeneral'
import styles from '../styles/Memorama.module.css'

export default function Memorama(){
  return (
    <>
      <div className='circulo-verde04'></div>
      <div className='circulo-morado02'></div>
      <div className='circulo-verde03'></div>
      <div className='circulo-verde05'></div>
      <div className='circulo-morado03'></div>
      <HeaderGeneral></HeaderGeneral>
      <div className='paginaHeader'>Memorama</div>
      <div id="divCreditos" className={styles.divCreditos}>

	  </div>
	  <div id="divContenedor">
	  <ul className={styles.lista}></ul>
	  <div id="divInicio">
	  <div id="divInferior" >
	    <p>
		  Encuentra las imagenes que correspondan
		</p>
        <br/>
		<input type="button" value="Jugar" id="btnJugar" className={styles.boton} />
	  </div>
	  </div>
        <div id="divContador">
		  <p>Da clic en Jugar para iniciar</p>
		</div>
	  </div>
      <Menu></Menu>
    </>
  )
}