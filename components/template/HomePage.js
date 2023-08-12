import Baner from '../modules/Baner'
import Companies from '../modules/Companies'
import Defination from '../modules/Defination'
import HomePageIcons from '../modules/HomePageIcons'
import styles from './HomePage.module.css'


export default function HomePage() {
  return (
    <div>
      <Baner/>
      <HomePageIcons></HomePageIcons>
      <Defination/>
      <Companies/>
    </div>
  )
}
