import {useState} from 'react'
import axios from "axios";
import styles from '../styles/Cuenta.module.css'
import Menu from '../src/components/Menu'
import Sidebar from '../src/components/Sidebar'
import iron from '../config/session';

export default function Cuenta(props:any) {
  const [display,setDisplay] = useState('none')
  const [nombre,setNombre] = useState('')
  const [apellidoP,setApellidoP] = useState('')
  const [apellidoM,setApellidoM] = useState('')
  const [unidadA,setUnidadA] = useState(0)


  const cambiarNombre = async(e:any) => {
    e.preventDefault()
    const res = await axios.post('/api/querys/nombre', {
      correo: props.session.cor_cue,
      nombre: nombre
      
    })
    
  }
  const cambiarApellidoP = async(e:any) => {
    e.preventDefault()
    const res = await axios.post('/api/querys/apellidoP', {
      correo: props.session.cor_cue,
      apellido_p: apellidoP
    })
    
  } 
  const cambiarApellidoM = async(e:any) => {
    e.preventDefault()
    const res = await axios.post('/api/querys/apellidoM', {
      correo: props.session.cor_cue,
      apellido_m: apellidoM
    })
    
  } 
  const cambiarUnidadA = async(e:any) => {
    e.preventDefault()
    console.log(unidadA)
    const res = await axios.post('/api/querys/unidadA', {
      correo: props.session.cor_cue,
      unidad_a: unidadA
    })
    
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
          <div className={styles.titulo}>Datos Personales</div>
          <div className={styles.divExplicacion}>Esta sección es para modificar datos del usuario</div>
          <div className={styles.divOpcion}>Nombre</div>
          <div className={styles.contenedorFormularios1}>
            <form className={styles.contenedorCorreo} method='post' onSubmit={cambiarNombre}>
              <input type="text" className={styles.inputNombre} onChange={event => setNombre(event.target.value)} placeholder='Nuevo nombre'/>
              <button className={styles.guardar1}>Guardar</button>
            </form>
          </div>
          
          <div className={styles.divOpcion}>Apellidos</div>
          <div className={styles.contenedorFormularios2}>
            <form className={styles.contenedorCorreo} method='post' onSubmit={cambiarApellidoP}>
              <input type="text" className={styles.inputCorreo} onChange={event => setApellidoP(event.target.value)} placeholder='Apellido Paterno'/>
              <button className={styles.saveCorreo}>Guardar</button>
            </form>
            <form className={styles.contenedorCorreo} method='post' onSubmit={cambiarApellidoM}>
              <input type="text" className={styles.inputCorreo} onChange={event => setApellidoM(event.target.value)} placeholder='Apellido Materno'/>
              <button className={styles.saveCorreo}>Guardar</button>
            </form>
          </div>
          <div className={styles.divOpcion}>Unidad Académica</div>
          <div className={styles.contenedorFormularios3}>
            <form className={styles.contenedorCorreo} method='post' onSubmit={cambiarUnidadA}>
              <select className={styles.inputCorreo} onChange={event => setUnidadA(Number(event.target.value))} >
                <option value={1}>Química 1</option>
                <option value={2}>Química 2</option>
              </select>
              <button className={styles.guardar2}>Guardar</button>
            </form>
          </div>

          
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
