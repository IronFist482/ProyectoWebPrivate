import {useState} from 'react'
import ButtonPrincipal from './ButtonPrincipal'
import "../styles/Index.module.css"
import Link from "next/link"
import axios from 'axios'

export default function Login(){

  const [correo,setCorreo]= useState("")
  const [contrasena,setContrasena]= useState("")
  const validacion = async(e)=>{
    const res = await axios.get('/api/querys', {
      correo: correo,
      contrasena: contrasena
    })
    
  }
  return (
    <>
     <div className='circulo-verde01'></div>
      <div className="containerLogin">
        <div className="texto">Iniciar Sesion</div>
        <form className="formLogin" method='get' onSubmit={validacion}>
          <label className='labelCorreo'>Correo</label>
          <input type="text" className='label00' placeholder="ejemplo@gmail.com" required/>
          <label className='labelContrasena'>Contraseña</label>
          <input type="password" className='label01' placeholder="contraseña1234" required/>
          <Link href="/Principal"><ButtonPrincipal></ButtonPrincipal></Link>
        </form>
        <div className="logo-normal"></div>
      </div>
    </>
  );
};
