import styles from './styles.module.css'

export const TaskInput = () => {
  return (
    <form className={styles.formContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">Criar</button>
    </form>
  )
}
