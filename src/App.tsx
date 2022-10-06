import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

import { v4 as uuidV4 } from 'uuid'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { Wrapper } from './styles/wrapper'
import { Header } from './components/Header'
import { TaskInput } from './components/InputTask'
import { InfoTasks } from './components/InfoTasks'
import { Empty } from './components/Empty'
import { Task } from './components/Task'

export interface ITask {
  text: string
  id: string
  done: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  const anyTasksCreated = tasks.length

  function addTask(taskText: string) {
    setTasks((state) => {
      return [
        {
          text: taskText,
          id: uuidV4(),
          done: false,
        },
        ...state,
      ]
    })
  }

  function removeTask(taskId: string) {
    setTasks((state) => {
      return state.filter((task) => task.id !== taskId)
    })
  }

  function markTask(taskId: string) {
    setTasks((state) => {
      return state.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            done: !task.done,
          }
        }
        return task
      })
    })
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Wrapper>
        <Header />
        <TaskInput addTask={addTask} />
        <InfoTasks tasks={tasks} />
        <AnimatePresence>
          {anyTasksCreated ? (
            tasks.map((task: ITask) => (
              <Task
                key={task.id}
                task={task}
                removeTask={removeTask}
                markTask={markTask}
              />
            ))
          ) : (
            <Empty />
          )}
        </AnimatePresence>
      </Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  )
}
