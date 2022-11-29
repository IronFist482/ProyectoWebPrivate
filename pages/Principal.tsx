import styles from '../styles/Principal.module.css'
import Menu from "../src/components/Menu"
import iron from '../config/session';

export default function Principal(){
  return (
    <>
      <div className="circulo-verde00"></div>
    
      <div className="imagenFondo"></div>
      <div className="textoP">Bienvenido Usuario</div>
      <div className={styles.divRecomendacion}></div>
      <Menu></Menu>
    </>
  );
};
export const getServerSideProps = iron(async({req,res}:any)=>{
  const session = req.session.get('user')
  if(!session){
    res.statusCode = 302;
    res.setHeader('Location', '/Login')
    res.end()
    return {props:{}}
  }
  else if(session.id_per==4){
    res.statusCode = 302;
    res.setHeader('Location', '/Test')
    res.end()
    return {props:{session:session}}
  }
  else{
    return {
      props: {session:session}
    }
  }
  
  
})