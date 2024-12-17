import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  index: number;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 rounded-lg shadow-sm mb-2 hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold text-gray-800 mb-1">{task.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{task.description}</p>
        </div>
      )}
    </Draggable>
  );
};