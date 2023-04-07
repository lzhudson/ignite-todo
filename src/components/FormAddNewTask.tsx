import { PlusCircle } from '@phosphor-icons/react';
import styles from './FormAddNewTask.module.css';
import { Input } from './Input';
import { ButtonAddNewTask } from './ButtonAddNewTask';
export function FormAddNewTask() {
  return (
    <form className={styles.form}>
      <Input 
        placeholder='Adicione uma nova tarefa'
      />
      <ButtonAddNewTask type='submit' />
    </form>
  )
}