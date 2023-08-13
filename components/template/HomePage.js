import Baner from '../modules/Baner'
import Companies from '../modules/Companies'
import Defination from '../modules/Defination'
import HomePageIcons from '../modules/HomePageIcons'
import Instruction from '../modules/Instruction'
import Guide from '../modules/Guide'
import Restriction from '../modules/Restriction'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div>
      <Baner/>
      <HomePageIcons></HomePageIcons>
      <Defination/>
      <Companies/>
      <Instruction/>
      <Guide/>
      <Restriction/>
    </div>
  )
}
