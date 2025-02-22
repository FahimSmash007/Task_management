import React, { useState } from 'react';

const DropHere_now = () => {
    const [Show_drop, setShow_drop] = useState(false);

    return (
        <div
            onDragEnter={() => setShow_drop(true)}
            onDragLeave={() => setShow_drop(false)}
            className={`border-red-500 mt-2 w-full border-2 `}
        >
            <h1 >DropHere_now</h1>
        </div>
    );
};

export default DropHere_now;
