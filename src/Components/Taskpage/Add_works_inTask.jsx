import React from "react";
import { useForm } from "react-hook-form";

export function Add_works_inTask() {
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
    console.log(data);
    // Add your submission logic here.
  };

  return (
    <>
      {/* Button to open the modal */}
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Open Modal
      </button>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-xl font-bold">Add Task</h2>

            {/* Task Name */}
            <div>
              <label className="block font-medium">
                Task Name
                <input
                  {...register("task-name", { required: "Task name is required" })}
                  type="text"
                  className="input input-bordered w-full mt-1"
                />
              </label>
              {errors["task-name"] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors["task-name"].message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium">
                Description
                <textarea
                  {...register("description", { required: "Description is required" })}
                  className="textarea textarea-bordered w-full mt-1"
                />
              </label>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Time */}
            <div>
              <label className="block font-medium">
                Time
                <input
                  {...register("time", { required: "Time is required" })}
                  type="datetime-local"
                  className="input input-bordered w-full mt-1"
                />
              </label>
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="btn btn-success"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => document.getElementById("my_modal_2").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>

        {/* Backdrop to close the modal */}
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
}
