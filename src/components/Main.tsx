import { FormAddNewTask } from "./FormAddNewTask";
import styles from './Main.module.css';
export function Main() {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <FormAddNewTask />
        </div>
      </section>
    </main>
  )
}