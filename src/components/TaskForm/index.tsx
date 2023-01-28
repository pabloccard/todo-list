import { BsPencilSquare } from 'react-icons/bs'
import styles from './styles.module.css'

export const TaskForm = () => {
  return (
    <form className={styles.formContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <BsPencilSquare />
      </button>
    </form>
  )
}
