import React from 'react';
import { TaskCard } from '../TaskCard';
import styles from './styles';

export const TaskList = ({ provided, tasks }) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      className={styles.container}
    >
      {tasks.map((task, index) => (
        <TaskCard key={task.id} task={task} index={index} />
      ))}
      {provided.placeholder}
    </div>
  );
};