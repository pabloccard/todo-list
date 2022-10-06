import { ITask } from '../../App'
import { CompletedTasks, CreatedTasks, InfoContainer } from './styles'

interface InfoTasksProps {
  tasks: ITask[]
}
export function InfoTasks({ tasks }: InfoTasksProps) {
  const createdTasks = tasks.length

  return (
    <InfoContainer>
      <CreatedTasks>
        <span>Tarefas criadas</span>
        <span>{createdTasks}</span>
      </CreatedTasks>

      <CompletedTasks>
        <span>Concluídas</span>
        <span>0</span>
      </CompletedTasks>
    </InfoContainer>
  )
}
