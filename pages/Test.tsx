import style from '../styles/Test.module.css'
import Preguntas from '../src/components/Preguntas'
import iron from '../config/session'

export default function Test(props:any){


  return (
    <div className={style.contenedor}>
      <div className={style.circuloVerde00}></div>
      <div className={style.circuloVerde01}></div>
      <div className={style.circuloMorado00}></div>
      <div className={style.divContenedorPrincipal}>
        <div className={style.titulo}>Test</div>
        <div className={style.divContenedorPregunta}>
          <Preguntas props={props}></Preguntas>
        </div>
      </div>
    </div>
  )
}
export const getServerSideProps = iron(async({req,res}:any)=>{
  const session = req.session.get('user')
  console.log(session.id_per)
  if(session.id_per!=4){
    res.setHeader('location','/Principal')
    res.statusCode = 302
    res.end()
    return {props:{session:session}}

  }
  else if(session.id_per==4){
    return {props:{session:session}}
  }
  else{
    return{
      props: {}
    }
  }
})