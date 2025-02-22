import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const Add_Category = ({refetch}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
     axios.post(`${import.meta.env.VITE_API_URL}/ALL_Categories`, {
      data,
    });
    closeModal()

  };

  const closeModal = () => {
    document.getElementById("my_modal_2").close();
  };

  return (
    <>
      <button className="css-button-shadow-border-sliding--black  mb-10" onClick={() => document.getElementById("my_modal_2").showModal()}>
        ADD Works
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h1 className="text-xl font-bold mb-4">Add Category</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.root?.serverError && (
              <p className="text-red-500">Something went wrong. Please try again.</p>
            )}

            <div className="mb-4">
              <label className="block">
                <span className="block font-medium mb-1">Category Name</span>
                <input
                  {...register("category_name", { required: "Category name is required" })}
                  type="text"
                  className="input input-bordered w-full"
                />
                {errors.category_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.category_name.message}</p>
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
    </>
  );
};

export default Add_Category;