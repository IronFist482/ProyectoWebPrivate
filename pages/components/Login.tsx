import {useState} from 'react'
import "../../styles/Index.module.css"
import Link from "next/link"
import axios from 'axios'

export default function Login(){

  const [correo,setCorreo]= useState("")
  const [contrasena,setContrasena]= useState("")
  const validar = true
  const validacion = async()=>{
    const res = await axios.post('/api/querys', {
      correo: correo,
      contrasena: contrasena
    })
    
  }
  return (
    <>
     <div className='circulo-verde01'></div>
      <div className="containerLogin">
        <div className="texto">Iniciar Sesion</div>
        <form className="formLogin" method='post' onSubmit={validacion}>
          <label className='labelCorreo'>Correo</label>
          <input type="text" className='label00' placeholder="ejemplo@gmail.com" onChange={event => setCorreo(event.target.value)} required/>
          <label className='labelContrasena'>Contraseña</label>
          <input type="password" className='label01' placeholder="contraseña1234" onChange={event => setContrasena(event.target.value)} required/>
          <button className="loginBoton2 tipoLetra">Iniciar</button>
        </form>
        <div className="logo-normal"></div>
      </div>
    </>
  );
};
