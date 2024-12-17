import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { TaskList } from '../TaskList';
import styles from './styles';

export const Column = ({ column, tasks }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList
            provided={provided}
            tasks={tasks}
          />
        )}
      </Droppable>
    </div>
  );
};