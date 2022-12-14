/* eslint-disable react/jsx-no-comment-textnodes */
import axios from 'axios'
import { E } from 'chart.js/dist/chunks/helpers.core'
import { redirect } from 'next/dist/server/api-utils'
import React,{useState} from 'react'
import iron from '../../config/session'
import style from '../../styles/Preguntas.module.css'

export default function Preguntas(props:any) {
  const numero=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"]
  const preguntas=[
  "¿Eres limpio y ordenado?",
  "¿Hablas muy rápido?",
  "¿Planeas muy bien tu agenda?",
  "¿Ves las palabras en tu mente?",
  "¿Recuerdas más lo que viste que lo que escuchaste?",
  "¿Tienes problemas con las instrucciones verbales a menos que estén escritas o que te las repitan",
  "¿Te gusta leer en vez de oír que alguien lea?",
  "¿Te distraes en una conversación telefónica?",
  "¿Te hablas a ti mismo mientras estás trabajando?",
  "¿Te distraes cuando hay ruido?",
  "¿Te gusta leer en voz alta?",
  "¿Mueves los labioso pronuncias las palabras mientras estas leyendo?",
  "¿Lo que escuchaste lo puedes reproducir imitando el tono de voz, el acento, el timbre?",
  "¿Se te dificulta la escritura, pero eres muy bueno al contar de viva voz lo que escuchaste?",
  "¿Hablas con cierto acento?",
  "¿Crees que eres una persona que sabe hablar muy bien y que los demás te prestan atención?",
  "¿Hablas calmadamente tomando bastante aire?",
  "¿Tocas a las personas para que te presten atención?",
  "¿Te acercas cuando estás hablando con alguien?",
  "¿Mueves mucho tu cuerpo?",
  "¿Aprendes más cuando lo estás haciendo?",
  "¿Memorizas más cuando caminas o te paseas?",
  "¿Utilizas tu dedo para mantener el renglón?",
  "¿Gesticulas mucho tu rostro cuando te expresas?"
  ]

  const [posicion,setPosicion] = useState(1)
  const [numeroD,setNumeroD] = useState("1")
  const [preguntaD,setPreguntaD] = useState("¿Eres limpio y ordenado?")
  const [opcion1D,setOpcion1D] = useState("Siempre")
  const [opcion2D,setOpcion2D] = useState("Algunas veces")
  const [opcion3D,setOpcion3D] = useState("Muy rara vez")
  const [puntosVisual,setPuntosVisual] = useState(0)
  const [puntosAuditivo,setPuntosAuditivo] = useState(0)
  const [puntosKinestesico,setPuntosKinestesico] = useState(0)
  const [preguntasPuntos,setPreguntasPuntos] = useState(0)
  let tipoA = 0;


  function accion(e: { preventDefault: () => void }){
    console.log(posicion)
    if(posicion<24){
      e.preventDefault();
      asignar()
      
      if (posicion<9) {
        setPuntosVisual(puntosVisual+preguntasPuntos)
      }
      else if(posicion<17){
        setPuntosAuditivo(puntosAuditivo+preguntasPuntos)
      }
      else{
        setPuntosKinestesico(puntosKinestesico+preguntasPuntos)
      }
      setPosicion(posicion+1)
    }
    else{
      if(puntosVisual>puntosAuditivo && puntosVisual>puntosKinestesico){
        console.log("visual")
        tipoA = 1
      }
      else if(puntosAuditivo>puntosVisual && puntosAuditivo>puntosKinestesico){
        console.log("auditivo")
        tipoA = 2
      }
      else{
        console.log("kinestesico")
        tipoA = 3
      }
      asignarAprendizaje(e)
    }
  }
  const asignarAprendizaje = async(e:any) => {
    const res = await axios.post('/api/querys/personalizacion', {
      correo: props.props.session.cor_cue,
      personalizacion: tipoA
    })
    console.log(res)
  }
  function asignar(){
    setNumeroD(numero[posicion])
    setPreguntaD(preguntas[posicion])
  }

  return (
    <div className={style.divContenedorCompleto}>
        <div className={style.divNumero}>{numeroD}</div>
        <label className={style.labelPregunta}>{preguntaD}</label>
        <form className={style.divFormulario} onSubmit={accion} method="post">
            <input className={style.radioButtons} type="radio" name="radio" id="1" value={3} onChange={event => setPreguntasPuntos(Number(event.target.value))} required/>
            <label className={style.labelsRadioButton}>{opcion1D}</label><br />
            <input className={style.radioButtons} type="radio" name="radio" id="2" value={2} onChange={event => setPreguntasPuntos(Number(event.target.value))} required/>
            <label className={style.labelsRadioButton}>{opcion2D}</label><br />
            <input className={style.radioButtons} type="radio" name="radio" id="3" value={1} onChange={event => setPreguntasPuntos(Number(event.target.value))} required/>
            <label className={style.labelsRadioButton}>{opcion3D}</label>
            <button type='submit' className={style.botonSiguiente}>Siguiente</button>
        </form>
    </div>
    
  )
}

