import { Check, Trash } from "@phosphor-icons/react";
import styles from './TaskItem.module.css';
import { useState } from "react";
export function TaskItem() {
  const [hasFinishedTask, setHasFinisihedTask] = useState(false);
  console.log(hasFinishedTask)
  console.log(styles)
  return (
    <li className={`${styles.taskItem} ${hasFinishedTask ? styles.taskItemFinished : ''}`}>
      <div className={styles.taskItemRadioGroup}>
        <input type="radio" />
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