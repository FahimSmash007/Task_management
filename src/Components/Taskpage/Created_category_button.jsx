import React from 'react';
import { useForm } from 'react-hook-form';

const Created_category_button = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = data => {
    console.log(data);
};
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            {...register("textField", { required: "This field is required" })}
                            placeholder="Enter text here"
                            className="input input-bordered w-full"
                        />
                        {errors.textField && <p className="text-red-500 text-xs mt-1">{errors.textField.message}</p>}
                        <button type="submit" className="btn btn-primary mt-2">
                            Submit
                        </button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Created_category_button;




