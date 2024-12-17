import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Column } from '../Column';
import { COLUMNS } from '../../constants/columns';
import styles from './styles';

export const Board = ({ tasks, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        {COLUMNS.map(column => (
          <Column
            key={column.id}
            column={column}
            tasks={tasks.filter(task => task.status === column.id)}
          />
        ))}
      </div>
    </DragDropContext>
  );
};