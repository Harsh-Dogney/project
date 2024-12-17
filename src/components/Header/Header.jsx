import React from 'react';
import { Plus } from 'lucide-react';
import styles from './styles';

export const Header = ({ onAddTask }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kanban Board</h1>
      <button
        onClick={onAddTask}
        className={styles.button}
      >
        <Plus size={20} />
        Add Task
      </button>
    </div>
  );
};