import { Task } from '../types';

export const filterTasksByQuery = (tasks: Task[], query: string): Task[] => {
  const searchTerm = query.toLowerCase().trim();
  return tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm) ||
    task.description.toLowerCase().includes(searchTerm)
  );
};

export const generateTaskId = (): string => {
  return `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};