import { useState } from 'react'
import { FormContainer } from './styles'
import { NotePencil } from 'phosphor-react'

interface InputTasksProps {
  addTask(taskText: string): void
}

export function TaskInput({ addTask }: InputTasksProps) {
  const [textInput, setTextInput] = useState<string>('')
  const inputIsEmpty = !textInput

  function handleSubmit() {
    window.event!.preventDefault()
    addTask(textInput)
    setTextInput('')
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(event) => setTextInput(event.target.value)}
        value={textInput}
      />
      <button disabled={inputIsEmpty} type="submit">
        <NotePencil size={20} />
        Criar
      </button>
    </FormContainer>
  )
}
