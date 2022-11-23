import React, { Component } from "react";
import styles from "../styles/ButtonLogin.module.css"

export default function ButtonLogin() {
  return (
    <>
      <button type="button" className={styles.loginBoton}>
        <div className={styles.textoBoton}>Iniciar Sesión</div> 
      </button>
    </>
  );
}
