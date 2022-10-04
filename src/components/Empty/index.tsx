import { EmptyContainer } from './styles'
import clipboard from '../../assets/clipboard.svg'

export function Empty() {
  return (
    <EmptyContainer>
      <img src={clipboard} alt="pracheta vazia" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong> <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </EmptyContainer>
  )
}
