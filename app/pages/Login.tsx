import React from 'react'
import ButtonPrincipal from './ButtonPrincipal'
import "../styles/Index.module.css"
import Link from "next/link"

export default function Login(){
  return (
    <>
     <div className='circulo-verde01'></div>
      <div className="containerLogin">
        <div className="texto">Iniciar Sesion</div>
        <div className="formLogin">
          <label className='labelCorreo'>Correo</label>
          <input type="text" className='label00' placeholder="ejemplo@gmail.com"/>
          <label className='labelContrasena'>Contraseña</label>
          <input type="password" className='label01' placeholder="contraseña1234" />
          <Link href="/Principal"><ButtonPrincipal></ButtonPrincipal></Link>
        </div>
        <div className="logo-normal"></div>
      </div>
    </>
  );
};
