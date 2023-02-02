import { FormEvent, useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

interface TaskFormProps {
  addTask(task: string): void
}

export const TaskForm = ({ addTask }: TaskFormProps) => {
  const [text, setText] = useState<string>('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addTask(text)
    setText('')
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setText(e.target.value)}
        value={text}
        maxLength={40}
      />
      <motion.button type="submit" disabled={!text} whileTap={{ scale: 0.95 }}>
        Criar <BsPencilSquare />
      </motion.button>
    </form>
  )
}
