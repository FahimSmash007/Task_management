import React, { useEffect, useState } from 'react';
import Add_taskButton from './Add_taskButton';
import axios from 'axios';
import Task_card from './Task_card';
import Created_category_button from './Created_category_button';
import { Add_works_inTask } from './Add_works_inTask';

const Create_Body_of_tasks = () => {
  const [divs, setDivs] = useState([]); // State to track the list of categories (divs)
  const [tasks, setTasks] = useState([]); // State to track the tasks for each category

  // WebSocket connection setup
  useEffect(() => {
    // Fetch categories on component mount
    axios.get(`${import.meta.env.VITE_API_URL}/ALL_Categories`)
      .then(response => setDivs(response.data))
      .catch(error => console.log(error));

    // Initialize WebSocket connection
    const socket = new WebSocket('ws://your-websocket-server-url'); // Use your WebSocket server URL

    // WebSocket events
    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Check if data is a task update or new task, then update the tasks state
      if (data.action === 'NEW_TASK') {
        setTasks((prevTasks) => [...prevTasks, data.task]);
      } else if (data.action === 'UPDATE_TASK') {
        setTasks((prevTasks) =>
          prevTasks.map(task =>
            task._id === data.task._id ? data.task : task
          )
        );
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  const loadTasksForCategory = (categoryId) => {
    // Fetch tasks for the selected category when button is clicked
    axios.get(`${import.meta.env.VITE_API_URL}/tasks?categoryId=${categoryId}`)
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div className="p-4">
      {/* Button to add a new div */}
      <Created_category_button />

      {/* Render all divs (categories) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {divs.map((div) => (
          <div key={div._id} className="border p-4 rounded bg-gray-100 shadow-md">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-lg">{div.Task_category}</h1>
              <Add_works_inTask />
            </div>

            {/* Render tasks for the current category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <Task_card key={task._id} task={task} />
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">
                  No tasks available.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Create_Body_of_tasks;
