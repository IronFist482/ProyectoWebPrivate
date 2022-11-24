const bcryptjs = require('bcryptjs')
import React, { useState } from "react";
import styles from "../styles/Signin.module.css";
import Preguntas from '../src/components/Preguntas'
import axios from "axios";
import {Form,Formik} from 'formik'


export default function Signin() {

  const [nombre,setNombre]= useState("")
  const [apellido_p,setApellido_p]= useState("")
  const [apellido_m,setApellido_m]= useState("")
  const [unidad_a,setUnidad_a]= useState("")
  const [correo,setCorreo]= useState("")
  const [contrasena,setContrasena]= useState("")

  const validacion = async()=>{
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
    console.log(res)
    
  }
  const h = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setUnidad_a(e.target.value)
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
            <select className={styles.selectNivel} id="select_nivel" onChange={h} required>
              <option className={styles.optionSelect} value={1}>
                Quimica I
              </option>
              <option className={styles.optionSelect} value={2}>
                Quimica II
              </option>
            </select>
            <label className={styles.labelCorreo}>
              Correo Electronico
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
