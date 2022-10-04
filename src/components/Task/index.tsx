import { TaskContainer } from './styles'
import { Trash } from 'phosphor-react'

interface TaskProps {
  task: {
    text: string
    id: string
    done: boolean
  }

  removeTask(taskId: string): void
}

export function Task({ removeTask, task }: TaskProps) {
  function handleRemoveTask() {
    removeTask(task.id)
  }

  return (
    <TaskContainer>
      <input type="checkbox" name="" id="" />
      <p>{task.text}</p>

      <span onClick={handleRemoveTask}>
        <Trash size={20} />
      </span>
    </TaskContainer>
  )
}
