import styles from '../../styles/HeaderUnidades.module.css'
import Link from 'next/link'

export default function HeaderUnidades2(props:any) {
  return (
    <div>
      <header className={styles.headerFondo}>
        <div className={styles.divContenedor}>
            <Link href='/VideosQuimica2' className={styles.headerUnidades}>Unidad I</Link>
            <Link href='/Unidad2' className={styles.headerUnidades}>Unidad II</Link>
            <Link href='/Unidad_3' className={styles.headerUnidades}>Unidad III</Link>
            <Link href='/Unidad_4' className={styles.headerUnidades}>Unidad IV</Link>
            <Link href='/Unidad_5' className={styles.headerUnidades}>Unidad V</Link>
            <Link href='/Unidad_6' className={styles.headerUnidades}>Unidad VI</Link>
        </div>
      </header>
    </div>
  )
}
