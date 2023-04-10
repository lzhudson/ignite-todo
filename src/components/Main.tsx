import { FormAddNewTask } from "./FormAddNewTask";
import styles from './Main.module.css';
import { TaskList } from "./TaskList";
export function Main() {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <FormAddNewTask />
          <TaskList />
        </div>
      </section>
    </main>
  )
}