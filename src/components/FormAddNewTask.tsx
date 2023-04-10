import { PlusCircle } from '@phosphor-icons/react';
import styles from './FormAddNewTask.module.css';
import { Input } from './Input';
import { ButtonAddNewTask } from './ButtonAddNewTask';
import { FormEvent, useState } from 'react';

interface FormAddNewTaskProps {
  onAddNewTask: (description: string) => void;
}

export function FormAddNewTask({ onAddNewTask } : FormAddNewTaskProps) {
  const [description, setDescription] = useState('');

  function handleAddNewTask(e : FormEvent) {
    e.preventDefault();
    onAddNewTask(description)
  }

  return (
    <form onSubmit={handleAddNewTask} className={styles.form}>
      <Input 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Adicione uma nova tarefa'
      />
      <ButtonAddNewTask type='submit' />
    </form>
  )
}