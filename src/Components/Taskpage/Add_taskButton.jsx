import React from 'react';
import { useForm } from 'react-hook-form';

const Add_taskButton = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      "task-name": "",
      "description": "",
      "time": "",
    },
  });

  const onSubmit = (data) => {
    console.log(data); // Replace this with your form submission logic
  };

  const openModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal_2").close();
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        className="css-button-shadow-border-sliding--black mt-5 mb-6"
        onClick={openModal}
      >
        Add Task
      </button>

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
                  {...register("task-name", { required: "Task name is required" })}
                  type="text"
                  className="input input-bordered w-full"
                />
                {errors["task-name"] && (
                  <p className="text-red-500 text-sm mt-1">{errors["task-name"].message}</p>
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

export default Add_taskButton;
