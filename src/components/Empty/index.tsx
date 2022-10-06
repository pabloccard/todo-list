import { EmptyContainer } from './styles'
import clipboard from '../../assets/clipboard.svg'

export function Empty() {
  return (
    <EmptyContainer
      transition={{ delay: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={clipboard} alt="pracheta vazia" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong> <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </EmptyContainer>
  )
}
