import React from 'react';

const Task_card = ({ task }) => {
    return (
        <div draggable className='w-96'>
            <div
                key={task.id}  
                className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h2 className="text-lg font-semibold text-gray-800">{task.task_name}</h2>
                <p className="text-sm text-gray-600 mt-2">{task.description}</p>
                <div className="mt-4">
                    <span className="text-xs font-medium text-gray-500">Category: </span>
                    <span className="text-xs text-blue-500">{task.category}</span>
                </div>
                <div className="mt-2">
                    <span className="text-xs font-medium text-gray-500">Timestamp: </span>
                    <span className="text-xs text-gray-700">{new Date(task.timestamp).toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default Task_card;