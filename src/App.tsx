import styles from './styles/app.module.css'
import logo from './assets/logo.svg'
import clipboard from './assets/clipboard.svg'
import './styles/global.css'
import { TaskForm } from './components/TaskForm'
import { TaskCount } from './components/TaskCount'
import { Task } from './components/Task'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { AnimatePresence } from 'framer-motion'

interface Tasks {
  id: string
  content: string
  isDone: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Tasks[]>([])

  function addTask(task: string) {
    setTasks((state) => {
      return [
        {
          id: uuid(),
          content: task,
          isDone: false,
        },
        ...state,
      ]
    })
  }

  function completeTask(id: string) {
    console.log(id)
    setTasks((state) => {
      return state.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone,
          }
        } else {
          return task
        }
      })
    })
  }

  function deleteTask(id: string) {
    setTasks((state) => {
      return state.filter((task) => task.id !== id)
    })
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.cover}>
        <img src={logo} alt="" className={styles.logo} />
      </div>

      <TaskForm addTask={addTask} />
      <TaskCount />

      {tasks.length ? (
        <ul className={styles.tasksContainer}>
          <AnimatePresence>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        <div className={styles.empty}>
          <img src={clipboard} alt="" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </div>
  )
}
