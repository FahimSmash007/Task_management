import React, { useState } from 'react';

const Dashboard = () => {
    const [showText, setShowText] = useState(true);

    const handleToggle = () => {
        setShowText((prev) => !prev);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
            <button
                onClick={handleToggle}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                {showText ? 'Hide' : 'Show'} hello
            </button>

            <h1
                className={`w-96 border-2 mt-4 p-2 text-center ${showText ? '' : 'hidden'}`}
            >
                Hello
            </h1>
        </div>
    );
};

export default Dashboard;
