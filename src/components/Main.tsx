import { useEffect, useId, useState } from "react";
import { FormAddNewTask } from "./FormAddNewTask";
import styles from './Main.module.css';
import { TaskList } from "./TaskList";

interface Task {
  id: string;
  description: string;
  hasFinished: boolean;
}

export function Main() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addNewTask(description: string) {
    const task = {
      id: String(tasks.length),
      description,
      hasFinished: false,
    }
    setTasks(prevState => [...prevState, task])
  }

  return (
    <main>
      <section>
        <div className={styles.container}>
          <FormAddNewTask 
            onAddNewTask={addNewTask}
          />
          <TaskList />
        </div>
      </section>
    </main>
  )
}