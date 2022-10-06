import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'
import { ITask } from '../../App'
import { CheckboxRoot, TaskContainer } from './styles'

interface TaskProps {
  task: ITask
  removeTask(taskId: string): void
  markTask(taskId: string): void
}

export function Task({ removeTask, task, markTask }: TaskProps) {
  function handleRemoveTask() {
    removeTask(task.id)
  }

  function handleMarkTask() {
    markTask(task.id)
  }

  return (
    <TaskContainer
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <CheckboxRoot onCheckedChange={handleMarkTask} checked={task.done}>
        <Checkbox.Indicator>
          <Check size={12} weight="bold" />
        </Checkbox.Indicator>
      </CheckboxRoot>

      <p>{task.text}</p>

      <span onClick={handleRemoveTask}>
        <Trash size={20} />
      </span>
    </TaskContainer>
  )
}
