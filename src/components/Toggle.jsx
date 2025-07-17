import React, { useState } from "react";

const Toggle = () => {
  const [isDark, setIsDark] = useState(false); // Track mode (light/dark)

  const handleChange = () => {
    setIsDark((prevMode) => !prevMode); // Toggle state
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen w-full"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div className="bg-gray-300 p-8 rounded-md">
        <h1>Hello React Js.</h1>
      </div>
      <div className="flex justify-center items-center m-2 rounded-md">
        <button
          className="bg-blue-400 p-2 text-2xl text-white rounded-md"
          onClick={handleChange} //  Correct way to call function
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Toggle;
