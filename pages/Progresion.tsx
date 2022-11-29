import {useState} from 'react'
import styles from '../styles/Progresion.module.css'
import Menu from "../src/components/Menu"
import Sidebar from "../src/components/Sidebar"
import iron from '../config/session'
import axios from 'axios'
import Router from 'next/router'

export default function Configuracion(){

  const [modal03,setModal03]= useState(false)
  const [display,setDisplay] = useState('none')
  const [correoActual,setCorreoActual] = useState('')
  const [correoNuevo,setCorreoNuevo] = useState('')
  const [contrasenaActual,setContrasenaActual] = useState('')
  const [contrasenaActualRepetida,setContrasenaActualRepetida] = useState('')
  const [contrasenaNueva,setContrasenaNueva] = useState('')
  const [error,setError] = useState(false)
  const [correcto1,setCorrecto1] = useState(false)
  const [correcto2,setCorrecto2] = useState(false)
  const [errorMismatch,setErrorMismatch] = useState(false)


  const cambiarCorreo = async(e) => {
    e.preventDefault()
    const res = await axios.post('/api/querys/correo', {
      correoActual: correoActual,
      correoNuevo: correoNuevo
    })
    .catch(resError)
    console.log(res)
    if(res.data=='No es correcto tu correo actual'){
      setErrorMismatch(true)
      setDisplay('block')
    }
    else if(res.data=='No puedes cambiar tu mismo correo'){
      setError(true)
      setDisplay('block')
    }
    else{
      setCorrecto1(true)
      setDisplay('block')
    }
    
  }
  const cambiarContrasena = async(e) => {
    e.preventDefault()
    const res = await axios.post('/api/querys/correo', {
      contraseanActual: correoActual,
      contrasenaNueva: correoNuevo
    })
    .catch(resError)
    
  } 
  const resError = (res:any) => {
    const {error1} = res.response.data
    
    error1 === 1062 && setError(true)
  }

  return (
    <div className={styles.contenedor}>
      
      <div className='circulo-verde04'></div>
      <div className='circulo-morado02'></div>
      <div className='circulo-verde03'></div>
      <div className='circulo-verde05'></div>
      <div className='circulo-morado03'></div>
      <div className={styles.barraLateralSolida}></div>
      <div className={styles.contenedorConfiguracion}>
        <Sidebar></Sidebar>
        <div className={styles.divContenidoGeneral}>
          <div className={styles.titulo}>Configuración</div>
          <div className={styles.divExplicacion}>Esta sección es para modificar los datos de acceso</div>
          <div className={styles.divOpcion}>Correo</div>
          <form className={styles.contenedorCorreo} method='post' onSubmit={cambiarCorreo}>
            <input type="email" className={styles.inputCorreo} onChange={event => setCorreoActual(event.target.value)} placeholder='Correo anterior'/>
            <input type="email" className={styles.inputCorreo} onChange={event => setCorreoNuevo(event.target.value)} placeholder='Correo nuevo'/>
            <button className={styles.saveCorreo}>Guardar</button>
          </form>
          <div className={styles.divOpcion}>Contraseña</div>
          <form className={styles.contenedorCorreo} >
            <input type="password" className={styles.inputCorreo} placeholder='Contraseña actual'/>
            <input type="password" className={styles.inputCorreo} placeholder='Repetir contraseña'/>
            <button className={styles.saveCorreo}>Confirmar</button>
          </form>
          <button className={styles.fondoModal03} style={{display}} onClick={e => setDisplay('none')}></button>
          <div className={styles.modal03} style={{display}}>
            <div className={styles.modalTitulo03}>¿Estás seguro de que quieres cambiar tu contraseña?</div>
            <div className={styles.aviso}>Si olvidas la contraseña, es posible que no puedas recuperar tu cuenta</div>
            <input type='password' className={styles.modalInput03}/>
            <button className={styles.modalBoton03}>Cambiar</button>
          </div>
          {error && <><button className={styles.fondoModal03} style={{display}} onClick={e => (setDisplay('none'),setError(false))}></button><div className={styles.modal00}><div className={styles.modalLabel}>El correo ingresado no coincide con el actual</div></div></>}
          {errorMismatch && <><button className={styles.fondoModal03} style={{display}} onClick={e => (setDisplay('none'),setErrorMismatch(false))}></button><div className={styles.modal01}><div className={styles.modalLabel}>El correo actual no es correcto</div></div></>}
          {correcto1 && <><button className={styles.fondoModal03} style={{display}} onClick={e => (setDisplay('none'),setCorrecto1(false))}></button><div className={styles.modal02}><div className={styles.modalLabel}>El correo ha sido cambiado</div></div></>}

          
        </div>
      </div>
      
      <Menu></Menu>
    </div>
  )
}
