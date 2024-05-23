import React from "react";

const TextGradient = ({ body, className }) => {
  return (
    <h1
      className={`inline-block text-transparent bg-gradient-to-r to-color-accent from-color-quinary  bg-clip-text ${className}`}
    >
      {body}
    </h1>
  );
};

export default TextGradient;
