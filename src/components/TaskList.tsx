import { Task } from "./Main";
import { NoTasks } from "./NoTasks";
import { TaskHeader } from "./TaskHeader";
import { TaskItem } from "./TaskItem";
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onUpdateStatusTask: (task: Task) => void
}

export function TaskList({ tasks, onUpdateStatusTask }: TaskListProps) {
  return (
    <div className={styles.taskListContainer}>
      <TaskHeader />
      {tasks ? (
        <ul className={styles.taskList}>
          {tasks.map(task => (
            <TaskItem 
              key={task.id}
              description={task.description}
              hasFinished={task.hasFinished}
              onUpdateStatusTask={() => onUpdateStatusTask(task)}
            />
          ))}
        </ul>
      ) : (<NoTasks />)}

    </div>
  )
}