import { Check, Trash } from "@phosphor-icons/react";
import styles from './TaskItem.module.css';
import { useState } from "react";

interface TaskItemProps {
  description: string;
  onUpdateStatusTask: () => void;
  hasFinished: boolean;
  onDeleteTask: () => void;
}

export function TaskItem({ description, onUpdateStatusTask, hasFinished, onDeleteTask }: TaskItemProps) {

  function handleToggleFinishTask() {
    onUpdateStatusTask();
  }

  function handleDeleteTask() {
    onDeleteTask();
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
        {description}
      </p>
      <button title="Deletar Tarefa" onClick={handleDeleteTask}>
        <Trash
          size={24}
        />
      </button>

    </li>
  )
}