import {useState} from 'react'
import Link from "next/link"
import axios from 'axios'
import iron from '../config/session'
import Router from "next/router";

export default function Login(){

  const [correo,setCorreo]= useState("")
  const [contrasena,setContrasena]= useState("")
  const [error,setError]= useState(false)
  const validacion = async(e:any)=>{
    e.preventDefault()
    const res = await axios.post('/api/querys/login', {
      correo: correo,
      contrasena: contrasena
    })
    .then( () => Router.replace('/Principal')).catch(resError)
    
  }
  const resError = (res:any) => {
    setError(true)
    Router.replace('/Signin')
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
export const getServerSideProps = iron(async({req,res}:any)=>{
  const user = req.session.get('user')
  if(user){
    res.setHeader('location','/Principal')
    res.statusCode = 302
    res.end()
    return {props:{}}

  }
  return {
    props: {}
  }
})