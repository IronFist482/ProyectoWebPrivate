import "../styles/Headers.module.css"
import "../styles/Index.module.css"
import React, { Component } from "react";


export default function HeaderVideos(props){
  return (
    <>
      <div className="contenedorHeader">
      <header>
        <div className='paginaHeader'>{props.encabezado}</div>
          <div className="logoHeader"></div>
      </header>
      </div>
    </>
  );
}