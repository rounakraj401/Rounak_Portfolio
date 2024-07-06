import React from "react";

const TestButton = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    window.location.href = 'mailto:rounakrajg401@gmail.com';
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
};

export default TestButton;
