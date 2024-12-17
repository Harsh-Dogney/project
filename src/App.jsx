import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Board } from './components/Board';
import { NewTaskModal } from './components/NewTaskModal';
import { useTaskManagement } from './hooks/useTaskManagement';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks, handleDragEnd } = useTaskManagement();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <Header onAddTask={() => setIsModalOpen(true)} />
        <SearchBar />
        <Board tasks={tasks} onDragEnd={handleDragEnd} />
        <NewTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}

export default App;