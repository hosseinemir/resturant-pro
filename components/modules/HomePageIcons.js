import styles from './HomePageIcons.module.css'
import Fast from '../icons/Fast'
import Food from '../icons/Food'
import Choice from '../icons/Choice'
import Clock from '../icons/Clock'

export default function HomePageIcons() {
  return (
    <div className={styles.main}>
        <h2>
            Why us
        </h2>
        <div className={styles.icondivcon}>
            <div className={styles.icondiv}>
                <Fast/>
                <p>fast</p>
            </div>
            <div className={styles.icondiv}>
                <Food/>
                <p>best resturant</p>
            </div>
            <div className={styles.icondiv}>
                <Choice/>
                <p>your choise</p>
            </div>
            <div className={styles.icondiv}>
                <Clock/>
                <p>24-7</p>
            </div>
        </div>
    </div>
  )
}
