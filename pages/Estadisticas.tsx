import HeaderGeneral from '../src/components/HeaderGeneral'
import Menu from "../src/components/Menu"
import {Bar} from 'react-chartjs-2';
import {Data} from '../src/ts/data'
import {useState} from 'react'
import { Chart as ChartJS} from 'chart.js/auto'
import styles from '../styles/Estadisticas.module.css'

export default function Estadisticas(){
  const [data,setData] = useState({
    labels: Data.map((data)=>data.year),
    datasets: [{
      label: 'Users Gained',
      data: Data.map((data)=>data.userGain),
    }]
  })
  return (
    <>
        <div className='circulo-verde04'></div>
        <div className='circulo-morado02'></div>
        <div className='circulo-verde03'></div>
        <div className='circulo-verde05'></div>
        <div className='circulo-morado03'></div>
        <HeaderGeneral></HeaderGeneral>
        
        
        <div className='paginaHeader'>Estadísticas</div>
        {/*<div className={styles.contenedorSemanal}>
          <Bar data={data} width={400} height={200}/>
        </div>*/}
        <Menu></Menu>
    </>
  )
}
