import {
  Belt,
  Chair,
  Computer,
  Guitar,
  Person,
  Plant,
  Portrait,
  Table,
  Window
} from './components'
import './hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
      <Portrait />
      <Belt />
      <Plant />
      <Guitar />
      <Window />
      <Person />
      <Computer />
      <Table />
      <Chair />
    </div>
  )
}
