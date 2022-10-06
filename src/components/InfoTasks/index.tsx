import { ITask } from '../../App'
import { CompletedTasks, CreatedTasks, InfoContainer } from './styles'

interface InfoTasksProps {
  tasks: ITask[]
}
export function InfoTasks({ tasks }: InfoTasksProps) {
  const createdTasks = tasks.length

  const completedTasks = tasks.reduce((completed, task) => {
    if (task.done) {
      return completed + 1
    }
    return completed
  }, 0)

  return (
    <InfoContainer>
      <CreatedTasks>
        <span>Tarefas criadas</span>
        <span>{createdTasks}</span>
      </CreatedTasks>

      <CompletedTasks>
        <span>Concluídas</span>
        <span>{completedTasks}</span>
      </CompletedTasks>
    </InfoContainer>
  )
}
