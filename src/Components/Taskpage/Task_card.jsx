import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Task_card = ({ task }) => {
  // Destructure the return values from useSortable
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: task._id, // Using task._id as the unique identifier for the sortable item
  });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef} // Reference to the element that will be draggable
      {...attributes} // Spread the accessibility attributes (e.g., role="listitem")
      {...listeners} // Spread listeners for drag events
      className="w-96 border-2 rounded-lg p-4 shadow-lg transition-shadow duration-200"
      style={style}
    >
      <div key={task._id} style={{touchAction:'none'}}>
        <h2 className="text-lg font-semibold text-gray-800">{task.task_name}</h2>
        <p className="text-sm text-gray-600 mt-2">{task.description}</p>
        {/* <div className="mt-4">
          <span className="text-xs font-medium text-gray-500">Category: </span>
          <span className="text-xs text-blue-500">{task.category}</span>
        </div> */}
        <div className="mt-2">
          <span className="text-xs font-medium text-gray-500">Time: {task.time} </span>
          <span className="text-xs text-gray-700">
            {/* {new Date(task.time).toLocaleString()} */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task_card;
