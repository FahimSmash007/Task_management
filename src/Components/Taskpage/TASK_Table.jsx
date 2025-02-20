import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Task_card from './Task_card';
import Add_taskButton from './Add_taskButton';
import CreateDivButton from './CreateDivButton';

const TASK_Table = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/Task.json') // Ensure the path is correct
            .then(response => setTasks(response.data.tasks))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="p-4">
         
                {/* <Add_taskButton></Add_taskButton> */}
                <CreateDivButton></CreateDivButton>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <Task_card task={task} ></Task_card>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No tasks available.</p>
                )}
            </div>
        </div>
    );
};

export default TASK_Table;
