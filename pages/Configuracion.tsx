import {useState} from 'react'
import styles from '../styles/Configuracion.module.css'
import Menu from "../src/components/Menu"
import Sidebar from "../src/components/Sidebar"
import iron from '../config/session'
import axios from 'axios'
import Router from 'next/router'
const bcrypt = require('bcryptjs')

export default function Configuracion(props:any){

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

  {/*const data= props.session.con_cue*/}

  const cambiarCorreo = async(e:any) => {
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
  const cambiarContrasena = async(e:any) => {
    e.preventDefault()
    const res = await axios.post('/api/querys/contrasena', {
      correo :props.session.cor_cue,
      contrasenaNueva: contrasenaNueva
    })
    .catch(resError)
    
  } 
  const resError = (res:any) => {
    const {error1} = res.response.data
    
    error1 === 1062 && setError(true)
  }
  const compararContrasenas = (e:any) => {
    e.preventDefault()
    
    if(contrasenaActual==contrasenaActualRepetida){
      const contrasenaBytes = props.session.con_cue.data
      const bytesString = String.fromCharCode(...contrasenaBytes)
      console.log(bytesString)
      const conToF=bcrypt.compareSync(contrasenaActual,bytesString)
      console.log(conToF)
      if(conToF){
        console.log('son iguales')
        setCorrecto2(true)
        setDisplay('block')
      }
      else{
      }
    }
    else{
      console.log('No son iguales')
    }
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
          <div className={styles.titulo}>Configuraci??n</div>
          <div className={styles.divExplicacion}>Esta secci??n es para modificar los datos de acceso</div>
          <div className={styles.divOpcion}>Correo</div>
          <form className={styles.contenedorCorreo} method='post' onSubmit={cambiarCorreo}>
            <input type="email" className={styles.inputCorreo} onChange={event => setCorreoActual(event.target.value)} placeholder='Correo anterior'/>
            <input type="email" className={styles.inputCorreo} onChange={event => setCorreoNuevo(event.target.value)} placeholder='Correo nuevo'/>
            <button className={styles.saveCorreo}>Guardar</button>
          </form>
          <div className={styles.divOpcion}>Contrase??a</div>
          <form className={styles.contenedorCorreo} onSubmit={compararContrasenas}>
            <input type="password" className={styles.inputCorreo} onChange={event => setContrasenaActual(event.target.value)} placeholder='Contrase??a actual'/>
            <input type="password" className={styles.inputCorreo} onChange={event => setContrasenaActualRepetida(event.target.value)} placeholder='Repetir contrase??a'/>
            <button className={styles.saveCorreo} >Confirmar</button>
          </form>
          <button className={styles.fondoModal03} style={{display}} onClick={e => setDisplay('none')}></button>
          <form className={styles.modal03} style={{display}} onSubmit={cambiarContrasena}>
            <div className={styles.modalTitulo03}>??Est??s seguro de que quieres cambiar tu contrase??a?</div>
            <div className={styles.aviso}>Si olvidas la contrase??a, es posible que no puedas recuperar tu cuenta</div>
            <input type='password' className={styles.modalInput03} onChange={event => setContrasenaNueva(event.target.value)} placeholder='Contrase??a actual'/>
            <button className={styles.modalBoton03} onClick={e => (setDisplay('none'),setCorrecto2(false))}>Cambiar</button>
          </form>
          {error && <><button className={styles.fondoModal03} style={{display}} onClick={e => (setDisplay('none'),setError(false))}></button><div className={styles.modal00}><div className={styles.modalLabel}>El correo ingresado no coincide con el actual</div></div></>}
          {errorMismatch && <><button className={styles.fondoModal03} style={{display}} onClick={e => (setDisplay('none'),setErrorMismatch(false))}></button><div className={styles.modal01}><div className={styles.modalLabel}>El correo actual no es correcto</div></div></>}
          {correcto1 && <><button className={styles.fondoModal03} style={{display}} onClick={e => (setDisplay('none'),setCorrecto1(false))}></button><div className={styles.modal02}><div className={styles.modalLabel}>El correo ha sido cambiado</div></div></>}

          
        </div>
      </div>
      
      <Menu></Menu>
    </div>
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
