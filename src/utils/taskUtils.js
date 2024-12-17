export const filterTasksByQuery = (tasks, query) => {
  const searchTerm = query.toLowerCase().trim();
  return tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm) ||
    task.description.toLowerCase().includes(searchTerm)
  );
};

export const generateTaskId = () => {
  return `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};