import styles from './MenuPage.module.css'
import Card from '../modules/Card'



export default function MenuPage({data}) {
  
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subcontainer}>
        {data.map(item=>(<Card key={item.id} {...item}/>))}
      </div>
      
    </div>
  )
}



