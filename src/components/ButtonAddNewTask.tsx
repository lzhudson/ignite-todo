import { PlusCircle } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './ButtonAddNewTask.module.css';
interface ButtonAddNewTaskProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function ButtonAddNewTask({ ...props } : ButtonAddNewTaskProps) {
  return (
    <button
      className={styles.button}
      {...props}
    >
      Criar
      <PlusCircle
      />
    </button>
  )
}