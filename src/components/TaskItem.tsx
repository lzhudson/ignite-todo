import { Check, Trash } from "@phosphor-icons/react";
import styles from './TaskItem.module.css';
import { useState } from "react";

interface TaskItemProps {
  description: string;
  onUpdateStatusTask: () => void;
  hasFinished: boolean;
}

export function TaskItem({description, onUpdateStatusTask, hasFinished } : TaskItemProps) {

  function handleToggleFinishTask() {
    console.log('clicked')
    onUpdateStatusTask();
  }

  return (
    <li className={`${styles.taskItem} ${hasFinished ? styles.taskItemFinished : ''}`}>
      <div className={styles.taskItemRadioGroup}>
        <input 
          checked={hasFinished}
          type="radio" 
          onChange={handleToggleFinishTask}
        />
        <Check
          size={7}
          weight="bold"
        />
      </div>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper. 
        Duis vel sed fames integer.
      </p>
      <Trash
        size={34}
      />
    </li>
  )
}