import React, { useEffect, useState } from 'react';
import Add_taskButton from './Add_taskButton';
import axios from 'axios';
import Task_card from './Task_card';
import Created_category_button from './Created_category_button';

const CreateDivButton = () => {
  const [divs, setDivs] = useState([]); // State to track the list of divs
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   axios.post('/Task.json') // Ensure the path is correct
  //     .then(response => setTasks(response.data.tasks))
  //     .catch(error => console.error(error));
  // }, []);


  return (
    <div className="">
      {/* Button to add a new div */}

      <Created_category_button></Created_category_button>

      {/* Render all divs */}
      <div className="space-y-2">
        {divs.map((div) => (
          <div key={div.id} className="border p-2 rounded bg-gray-100 w-full">
            <div className=' float-right'>
              <Add_taskButton></Add_taskButton>

            </div>
            {
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.length > 0 ? (
                  tasks.map(task => (
                    <Task_card task={task}  ></Task_card>
                  ))
                ) : (
                  <p className="text-center text-gray-500 col-span-full">No tasks available.</p>
                )}
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateDivButton;
