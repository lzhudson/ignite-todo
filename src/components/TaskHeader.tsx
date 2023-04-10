import { Task } from './Main';
import styles from './TaskHeader.module.css';

interface TaskHeaderProps {
  tasks: Task[];
}

export function TaskHeader({ tasks } : TaskHeaderProps) {
  const quantityTasksCreated = tasks?.length || 0;
  const quantityTasksFinished = tasks?.filter(task => task.hasFinished)?.length || 0;

  return (
    <header className={styles.taskHeader}>
      <div className={styles.tasksCreatedContainer}>
        Tarefas criadas
        <span>{quantityTasksCreated}</span>
      </div>
      <div className={styles.tasksFinishedContainer}>
        Concluídas
        <span>{quantityTasksFinished} de {quantityTasksCreated}</span>
      </div>
    </header>
  )
}