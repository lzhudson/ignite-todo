import { NoTasks } from "./NoTasks";
import { TaskHeader } from "./TaskHeader";
import { TaskItem } from "./TaskItem";
import styles from './TaskList.module.css';
export function TaskList() {
  return (
    <div className={styles.taskListContainer}>
      <TaskHeader />
      {/* <NoTasks /> */}
      <ul className={styles.taskList}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </ul>
    </div>
  )
}