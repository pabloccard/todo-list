import styles from './styles/app.module.css'
import logo from './assets/logo.svg'
import './styles/global.css'
import { TaskInput } from './components/TaskInput'

export function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.cover}>
        <img src={logo} alt="" className={styles.logo} />
      </div>

      <TaskInput />
    </div>
  )
}
