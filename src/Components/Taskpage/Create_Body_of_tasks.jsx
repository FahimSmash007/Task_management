import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Add_taskButton from "../Taskpage/Add_taskButton";
import Trash from "/Trash.svg";
import Task_card from "./Task_card";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { closestCorners, DndContext, PointerSensor, TouchSensor, useSensor } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Add_Category from './Add_Category';

const fetchCategories = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/ALL_Categories`);
  return response.data;
};

const fetchTasksByCategory = async (categories) => {
  const tasksData = await Promise.all(
    categories.map((category) =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/all_Created_task?category_id=${category._id}`)
        .then((response) => response.data)
        .catch(() => [])
    )
  );

  // Format time to 'M/D/YY h:mm a' using moment.js
  return tasksData.flat().map((task) => ({
    ...task,
    time: moment(task.time).format('M/D/YY h:mm a'),
  }));
};

const Create_Body_of_tasks = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draggedTasks, setDraggedTasks] = useState([]);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      task_name: "",
      description: "",
      time: "",
    },
  });

  const { data: categories = [], isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const { data: tasks = [], isLoading: tasksLoading, refetch } = useQuery({
    queryKey: ['tasks', categories],
    queryFn: () => fetchTasksByCategory(categories),
    enabled: categories.length > 0,
  });

  const onSubmit = async (data) => {
    console.log(data)

    try {
      // Format the date as 'M/D/YY h:mm a' before sending to the database
      const formattedTime = moment(data.time).format('M/D/YY h:mm a');
      await axios.post(`${import.meta.env.VITE_API_URL}/ALL_Tasks`, {
        ...data,
        time: formattedTime,
        category_id: currentCategoryId,
      });
      refetch();
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = (categoryId) => {
    setCurrentCategoryId(categoryId);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;

    const activeIndex = tasks.findIndex((task) => task._id === active.id);
    const overIndex = tasks.findIndex((task) => task._id === over.id);

    if (activeIndex !== -1 && overIndex !== -1) {
      const updatedTasks = arrayMove([...tasks], activeIndex, overIndex);
      setDraggedTasks(updatedTasks);
    }
  };

  const mouseSensor = useSensor(PointerSensor);
  const touchSensor = useSensor(TouchSensor);



  function delete_category(id) {
    console.log(id);
    
  }


  function category_added() {
  refetch()
    
  }

  return (

    <>
      
     <div className="flex flex-wrap gap-5">

      {categories.map((category) => {
        const categoryTasks = (draggedTasks.length ? draggedTasks : tasks).filter((task) => task.category_id === category._id);

        return (
          <div key={category._id} className="flex flex-col p-5 rounded-2xl border-2 space-y-5 h-fit">
            <div className="flex justify-between">
              <h1 className="text-4xl">{category.Task_category}</h1>
              <div className="flex gap-2.5">
                <button className="css-button-shadow-border-sliding--black" onClick={() => openModal(category._id)}>Add Task</button>
                <button onClick={()=>delete_category(category._id)}><img src={Trash} alt="Delete" /></button>
              </div>
            </div>

            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners} sensors={[mouseSensor, touchSensor]}>
              <SortableContext items={categoryTasks.map((task) => task._id)} strategy={rectSortingStrategy}>
                <div className="space-y-1">
                  {categoryTasks.length > 0 ? (
                    categoryTasks.map((task) => (
                      <Task_card key={task._id} task={{ ...task, time: moment(task.time).format('M/D/YY h:mm a') }} />
                    ))
                  ) : (
                    <p>No tasks available for this category.</p>
                  )}
                </div>
              </SortableContext>
            </DndContext>

          </div>
        );
      })}

      {isModalOpen && (
        <dialog id="my_modal_2" className="modal" open>
          <div className="modal-box">
            <h1 className="text-xl font-bold mb-4">Add Task</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.root?.serverError && <p className="text-red-500">Something went wrong. Please try again.</p>}
              <div className="mb-4">
                <label className="block">
                  <span className="block font-medium mb-1">Task Name</span>
                  <input {...register("task_name", { required: "Task name is required" })} type="text" className="input input-bordered w-full" />
                  {errors.task_name && <p className="text-red-500 text-sm mt-1">{errors.task_name.message}</p>}
                </label>
              </div>
              <div className="mb-4">
                <label className="block">
                  <span className="block font-medium mb-1">Description</span>
                  <textarea {...register("description", { required: "Description is required" })} className="textarea textarea-bordered w-full" />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                </label>
              </div>
              <div className="mb-4">
                <label className="block">
                  <span className="block font-medium mb-1">Time</span>
                  <input {...register("time", { required: "Time is required" })} type="datetime-local" className="input input-bordered w-full" />
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
                </label>
              </div>
              <div className="flex justify-end gap-4">
                <button type="submit" className="css-button-shadow-border-sliding--black" disabled={isSubmitting}>Submit</button>
                <button type="button" className="css-button-shadow-border-sliding--black" onClick={closeModal}>Close</button>
              </div>
            </form>
          </div>
        </dialog>
      )}
      
    </div>
    </>
   
  );
};

export default Create_Body_of_tasks;
