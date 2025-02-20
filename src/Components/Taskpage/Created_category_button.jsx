import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Created_category_button = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // 🌐 WebSocket setup
    useEffect(() => {
        const ws = new WebSocket(`${import.meta.env.VITE_API_URL}`); // Change URL if deployed

        ws.onopen = () => {
            console.log('WebSocket connected ✅');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.message === 'New Category Added') {
                console.log('🟢 Real-time Update:', data.data);
                // You can add code here to update the UI if needed
            }
        };

        ws.onclose = () => console.log('WebSocket disconnected ❌');
        ws.onerror = (error) => console.error('WebSocket error:', error);

        return () => ws.close();
    }, []);

    const onSubmit = (data) => {
        axios({
            method: 'post',
            url: `${import.meta.env.VITE_API_URL}/ALL_Categories`,
            data: { data },
        })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <button className="css-button-shadow-border-sliding--black" onClick={() => document.getElementById('my_modal_2').showModal()}>
                Add new Work
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box ">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-lg">Task Name</h1>
                        <input
                            type="text"
                            {...register('textField', { required: 'This field is required' })}
                            placeholder="Enter text here"
                            className="input input-bordered w-full"
                        />
                        {errors.textField && <p className="text-red-500 text-xs mt-1">{errors.textField.message}</p>}
                        <button type="submit" className="css-button-shadow-border-sliding--black mt-2">
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
