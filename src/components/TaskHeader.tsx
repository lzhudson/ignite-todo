import styles from './TaskHeader.module.css';
export function TaskHeader() {
  return (
    <header className={styles.taskHeader}>
      <div className={styles.tasksCreatedContainer}>
        Tarefas criadas
        <span>0</span>
      </div>
      <div className={styles.tasksFinishedContainer}>
        Concluídas
        <span>2 de 5</span>
      </div>
    </header>
  )
}