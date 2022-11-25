import styles from '../styles/Principal.module.css'
import Menu from "../src/components/Menu"

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
