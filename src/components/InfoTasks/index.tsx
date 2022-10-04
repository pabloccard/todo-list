import { CompletedTasks, CreatedTasks, InfoContainer } from './styles'

export function InfoTasks() {
  return (
    <InfoContainer>
      <CreatedTasks>
        <span>Tarefas criadas</span>
        <span>0</span>
      </CreatedTasks>

      <CompletedTasks>
        <span>Concluídas</span>
        <span>0</span>
      </CompletedTasks>
    </InfoContainer>
  )
}
