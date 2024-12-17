import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DropResult } from 'react-beautiful-dnd';
import { RootState } from '../store';
import { moveTask } from '../store/taskSlice';
import { filterTasksByQuery } from '../utils/taskUtils';

export const useTaskManagement = () => {
  const dispatch = useDispatch();
  const { tasks, searchQuery } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = filterTasksByQuery(tasks, searchQuery);

  const handleDragEnd = useCallback((result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    dispatch(moveTask({
      taskId: draggableId,
      newStatus: destination.droppableId as any
    }));
  }, [dispatch]);

  return {
    tasks: filteredTasks,
    handleDragEnd
  };
};