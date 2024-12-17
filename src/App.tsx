import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Plus } from 'lucide-react';
import { Column } from './components/Column';
import { SearchBar } from './components/SearchBar';
import { NewTaskModal } from './components/NewTaskModal';
import { useTaskManagement } from './hooks/useTaskManagement';
import { COLUMNS } from './constants/columns';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks, handleDragEnd } = useTaskManagement();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Kanban Board</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus size={20} />
            Add Task
          </button>
        </div>

        <SearchBar />

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {COLUMNS.map(column => (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter(task => task.status === column.id)}
              />
            ))}
          </div>
        </DragDropContext>

        <NewTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}

export default App;