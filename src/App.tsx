import styles from './styles/app.module.css'
import logo from './assets/logo.svg'
import clipboard from './assets/clipboard.svg'
import './styles/global.css'
import { TaskForm } from './components/TaskForm'
import { TaskCount } from './components/TaskCount'
import { Task } from './components/Task'

export function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.cover}>
        <img src={logo} alt="" className={styles.logo} />
      </div>

      <TaskForm />
      <TaskCount />

      <div className={styles.empty}>
        <img src={clipboard} alt="" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong> <br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}
