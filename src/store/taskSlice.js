import { createSlice } from '@reduxjs/toolkit';
import { COLUMNS } from '../constants/columns';

const initialState = {
  tasks: [],
  searchQuery: '',
};

// Initialize tasks array with empty arrays for each column
COLUMNS.forEach(column => {
  initialState.tasks[column.id] = [];
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    moveTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload.taskId);
      if (task) {
        task.status = action.payload.newStatus;
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, moveTask, setSearchQuery } = taskSlice.actions;
export default taskSlice.reducer;