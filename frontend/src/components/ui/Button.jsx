import React from "react";

const Button = ({ type = "button", onClick, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
