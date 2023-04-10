import { useEffect, useId, useState } from "react";
import { FormAddNewTask } from "./FormAddNewTask";
import styles from './Main.module.css';
import { TaskList } from "./TaskList";

export interface Task {
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

  function toggleFinishTask(taskReceived : Task) {
    const tasksUpdated = tasks.map(task => {
      if(taskReceived.id === task.id) {
        taskReceived.hasFinished = !taskReceived.hasFinished;
        return taskReceived;
      }
      return taskReceived;
    })
    setTasks(tasksUpdated);
  }

  function deleteTask(taskId: string) {
    const tasksUpdated = tasks.filter(task => task.id !== taskId);
    setTasks(tasksUpdated);
  }

  return (
    <main>
      <section>
        <div className={styles.container}>
          <FormAddNewTask 
            onAddNewTask={addNewTask}
          />
          <TaskList 
            tasks={tasks}
            onUpdateStatusTask={toggleFinishTask}
            onDeleteTask={deleteTask}
          />
        </div>
      </section>
    </main>
  )
}