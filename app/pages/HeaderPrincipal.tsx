import styles from "../styles/HeaderPrincipal.module.css";
import ButtonLogin from "./ButtonLogin"
import ButtonSignin from "./ButtonSignin"
import Link from "next/link"

export default function HeaderPrincipal() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoCompleto}>
          <div className={styles.logoFigura}></div>
          <div className={styles.logoTexto}></div>
        </div>
        <div className={styles.loginSignin}>
          <Link href="/Login" className={styles.loginBoton}><ButtonLogin></ButtonLogin></Link>
          <Link href="/Signin" className={styles.signinBoton}><ButtonSignin></ButtonSignin></Link>
        </div>
      </header>
    </>
  );
}
