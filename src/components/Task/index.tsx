import { FiTrash2 } from 'react-icons/fi'
import { BsCheck } from 'react-icons/bs'
import * as Checkbox from '@radix-ui/react-checkbox'
import styles from './styles.module.css'

interface TaskProps {
  task: {
    id: string
    content: string
    isDone: boolean
  }
  completeTask(id: string): void
  deleteTask(id: string): void
}

export const Task = ({ task, completeTask, deleteTask }: TaskProps) => {
  function handleDeleteTask() {
    deleteTask(task.id)
  }
  return (
    <li className={styles.taskContainer}>
      <Checkbox.Root
        className={styles.checkboxRoot}
        onCheckedChange={() => completeTask(task.id)}
        checked={task.isDone}
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <BsCheck />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className={styles.content}>{task.content}</p>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <FiTrash2 />
      </button>
    </li>
  )
}
