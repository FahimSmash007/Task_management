import React, { useState } from 'react';

const CreateDivButton = () => {
  const [divs, setDivs] = useState([]); // State to track the list of divs

  const handleAddDiv = () => {
    const newDiv = { id: divs.length + 1, content: `This is div #${divs.length + 1}` };
    setDivs([...divs, newDiv]); // Add a new div to the state
  };

  return (
    <div className="">
      {/* Button to add a new div */}
      <button
        className="css-button-shadow-border-sliding--black mb-4"
        onClick={handleAddDiv}
      >
        Create Div
      </button>

      {/* Render all divs */}
      <div className="space-y-2">
        {divs.map((div) => (
          <div key={div.id} className="border p-2 rounded bg-gray-100 w-full">
            {div.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateDivButton;
