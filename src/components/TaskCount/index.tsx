import styles from './styles.module.css'

export const TaskCount = () => {
  return (
    <div className={styles.taskCountContainer}>
      <div>
        <strong className={(styles.info, styles.created)}>
          Tarefas criadas
        </strong>
        <span className={styles.count}>0</span>
      </div>

      <div>
        <strong className={(styles.info, styles.finished)}>Concluídas</strong>
        <span className={styles.count}>0</span>
      </div>
    </div>
  )
}
