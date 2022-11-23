
import styles from "../styles/ButtonSignin.module.css"

export default function ButtonSignin() {
  return (
    <>
      <button type="button" className={styles.signinBoton}>
        <div className={styles.textoBoton}>Registro</div> 
      </button>
    </>
  );
}
