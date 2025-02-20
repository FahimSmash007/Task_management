import React, { useEffect, useState } from 'react';
import Add_taskButton from "../Taskpage/Add_taskButton";
import Trash from "/Trash.svg";
import Task_card from "./Task_card";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import moment from 'moment';

const Create_Body_of_tasks = () => {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]); // State to store tasks based on category
  const [currentCategoryId, setCurrentCategoryId] = useState(null); // State for category ID

  // Example: Current ISO string to format
  const isoString = "2025-01-30T15:35"; 

  // Format the date using moment.js
  const formattedDate = moment(isoString).format('MMMM DD, YYYY, h:mm A');
  console.log(formattedDate); // Example output: January 30, 2025, 3:35 PM

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      task_name: "",
      description: "",
      time: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted Data: ", data);
    const { task_name, description, time } = data;

    const final = {
      task_name: task_name,
      description: description,
      time: time,
      category_id: currentCategoryId, // Use the current category ID from state
    };

    // Post the task data
    axios.post(`${import.meta.env.VITE_API_URL}/ALL_Tasks`, final)
      .then(response => console.log("Response:", response.data))
      .catch(error => console.error("Error:", error));
  };

  const openModal = (categoryId) => {
    setCurrentCategoryId(categoryId); // Set the category ID when opening the modal
    document.getElementById("my_modal_2").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal_2").close();
  };

  // Fetch categories once when component mounts
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/ALL_Categories`)
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // Fetch tasks for each category once categories are fetched
  useEffect(() => {
    if (categories.length > 0) {
      const fetchTasks = async () => {
        try {
          const tasksData = await Promise.all(
            categories.map(category => {
              return axios.get(`${import.meta.env.VITE_API_URL}/all_Created_task?category_id=${category._id.toString()}`)
                .then(response => response.data) // return task data for the current category
                .catch(error => {
                  console.error(`Error fetching tasks for category ${category._id}:`, error);
                  return []; // Return an empty array on error to prevent breaking the code
                });
            })
          );

          // Flatten the array of task data from all categories and update the state
          setTasks(tasksData.flat());
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };

      fetchTasks();
    }
  }, [categories]); // This effect runs when `categories` state is updated

  return (
    <div className="flex flex-wrap gap-5 h-fit place-content-center place-items-center">
      {categories.map((category) => {
        // Filter tasks for the current category based on the category_id
        const categoryTasks = tasks.filter(task => task.category_id === category._id.toString());

        return (
          <div key={category._id} className="w-96  flex flex-col p-5 rounded-2xl">
            <div className="flex justify-between">
              <h1 className="text-4xl">{category.Task_category}</h1>
              <div className="flex gap-2.5">
                {/* Button to open the modal */}
                <button
                  className="css-button-shadow-border-sliding--black"
                  onClick={() => openModal(category._id)} // Pass category ID when opening modal
                >
                  Add Task
                </button>

                <button>
                  <img src={Trash} alt="Delete" />
                </button>
              </div>
            </div>

            <div>
              {/* Render tasks for the current category */}
              {categoryTasks.length > 0 ? (
                categoryTasks.map(task => (
                  <Task_card key={task._id} task={task} />
                ))
              ) : (
                <p>No tasks available for this category.</p>
              )}
            </div>
          </div>
        );
      })}

      {/* Modal structure */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h1 className="text-xl font-bold mb-4">Add Task</h1>

          {/* Form inside modal */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.root?.serverError && (
              <p className="text-red-500">Something went wrong. Please try again.</p>
            )}

            <div className="mb-4">
              <label className="block">
                <span className="block font-medium mb-1">Task Name</span>
                <input
                  {...register("task_name", { required: "Task name is required" })}
                  type="text"
                  className="input input-bordered w-full"
                />
                {errors.task_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.task_name.message}</p>
                )}
              </label>
            </div>

            <div className="mb-4">
              <label className="block">
                <span className="block font-medium mb-1">Description</span>
                <textarea
                  {...register("description", { required: "Description is required" })}
                  className="textarea textarea-bordered w-full"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                )}
              </label>
            </div>

            <div className="mb-4">
              <label className="block">
                <span className="block font-medium mb-1">Time</span>
                <input
                  {...register("time", { required: "Time is required" })}
                  type="datetime-local"
                  className="input input-bordered w-full"
                />
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                )}
              </label>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="css-button-shadow-border-sliding--black"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <button
                type="button"
                className="css-button-shadow-border-sliding--black"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Create_Body_of_tasks;
