import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveTask } from '../store/taskSlice';
import { filterTasksByQuery } from '../utils/taskUtils';

export const useTaskManagement = () => {
  const dispatch = useDispatch();
  const { tasks, searchQuery } = useSelector((state) => state.tasks);

  const filteredTasks = filterTasksByQuery(tasks, searchQuery);

  const handleDragEnd = useCallback((result) => {
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
      newStatus: destination.droppableId
    }));
  }, [dispatch]);

  return {
    tasks: filteredTasks,
    handleDragEnd
  };
};