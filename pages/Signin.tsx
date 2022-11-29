
import React, { useState } from "react";
import styles from "../styles/Signin.module.css";
import axios from "axios";
import Router from "next/router";
import iron from "../config/session";


export default function Signin() {

  const [nombre,setNombre]= useState("")
  const [apellido_p,setApellido_p]= useState("")
  const [apellido_m,setApellido_m]= useState("")
  const [unidad_a,setUnidad_a]= useState(1)
  const [correo,setCorreo]= useState("")
  const [contrasena,setContrasena]= useState("")
  const [error,setError]= useState(false)

  const validacion = async(e:any)=>{
    e.preventDefault()
    const res = await axios.post('/api/querys', {
      nombre: nombre,
      ap_paterno: apellido_p,
      ap_materno: apellido_m,
      correo: correo,
      contrasena: contrasena,
      unidad_a: unidad_a,
      aprendizaje: 4,
      tipo: 'guardar'

    })
    .then( () => Router.replace('/Login')).catch(resError)
    
  }
  
  const resError = (res:any) => {
    const {errno} = res.response.data
    
    errno === 1062 && setError(true)
  }
  return (
    <div className={styles.container}>
      <div className={styles.circuloVerde00}></div>
      <div className={styles.titulo}>Registro</div>
      <div className={styles.formularioPrimario}>
        <div className={styles.contenedorFormularioDatos}>
          <form className={styles.formulario} onSubmit={validacion} method='post'>
            <label className={styles.labelNombre}>
              Nombre
            </label>
            <input className={styles.inputNombre} type="text" id="nombre" onChange={event => setNombre(event.target.value)} required/>
            <label className={styles.labelApellidoMaterno}>
              Apellido Paterno
            </label>
            <input className={styles.inputApellidoMaterno} type="text" id="apellido_m" onChange={event => setApellido_p(event.target.value)} required/>
            <label className={styles.labelApellidoPaterno}>
              Apellido Materno
            </label>
            <input className={styles.inputApellidoPaterno} type="text" id="apellido_p" onChange={event => setApellido_m(event.target.value)} required/>
            <label className={styles.labelNivelAcademico}>
              Unidad Académica
            </label>
            <select className={styles.selectNivel} id="select_nivel" onChange={e=>setUnidad_a(Number(e.target.value))} required>
              <option className={styles.optionSelect} value={1}>
                Química I
              </option>
              <option className={styles.optionSelect} value={2}>
                Química II
              </option>
            </select>
            <label className={styles.labelCorreo}>
              Correo Electrónico
            </label>
            <input className={styles.inputCorreo} type="email" id="correo" onChange={event => setCorreo(event.target.value)} required/>
            <label className={styles.labelContrasena}>
              Contraseña
            </label>
            <input className={styles.inputContrasena} type="password" id="contrasena" onChange={event => setContrasena(event.target.value)} required/>
            <button className={styles.botonSiguiente}>Registrar</button>
          </form>
          
        </div>
        
        
      </div>
      {error && <div className={styles.error}>El correo ya está registrado</div>}
      {/*
      <div className={styles.divContenedorSecundario}>
        <div className={styles.divContenedorPregunta}>
          <Preguntas></Preguntas>
        </div>
      </div>
      */
      }
      
    </div>
  );
}
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
