// import React from 'react';
// import { Droppable } from 'react-beautiful-dnd';
// import { TaskCard } from './TaskCard';

// export const Column = ({ column, tasks }) => {
//   return (
//     <div className="bg-gray-100 p-4 rounded-lg w-80">
//       <h2 className="font-bold text-lg mb-4 text-gray-700">{column.title}</h2>
//       <Droppable droppableId={column.id}>
//         {(provided) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             className="min-h-[200px]"
//           >
//             {tasks.map((task, index) => (
//               <TaskCard key={task.id} task={task} index={index} />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// };

// import React from 'react';
// import { Droppable } from 'react-beautiful-dnd';
// import { TaskCard } from './TaskCard';

// export const Column = ({ column = { title: "Untitled", id: "default" }, tasks = [] }) => {
//   return (
//     <div className="bg-gray-100 p-4 rounded-lg w-80">
//       <h2 className="font-bold text-lg mb-4 text-gray-700">{column.title}</h2>
//       <Droppable droppableId={column.id}>
//         {(provided) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             className="min-h-[200px]"
//           >
//             {tasks.map((task, index) => (
//               <TaskCard key={task.id} task={task} index={index} />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// };

import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { TaskCard } from './TaskCard';

export const Column = ({ column = { title: "Untitled", id: "default" }, tasks = [] }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg w-80">
      <h2 className="font-bold text-lg mb-4 text-gray-700">{column.title}</h2>
      <Droppable droppableId={column.id || "default"}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="min-h-[200px]"
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
