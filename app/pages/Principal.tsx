import styles from '../styles/Principal.module.css'
import Menu from "./Menu"

export default function Principal(){
  return (
    <>
      <div className="circulo-verde00"></div>
    
      <div className="imagenFondo"></div>
      <div className="textoP">Bienvenido</div>
      <div className={styles.divRecomendacion}></div>
      <Menu></Menu>
    </>
  );
};
