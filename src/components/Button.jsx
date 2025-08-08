import React, { useState } from "react";

const Button = ({ children }) => {
  const [isInStock, setIsInStock] = useState(true)

  return (
    <div className={`bg-gray-900 text-[#fff] px-5 text-lg py-1.5 rounded-lg ${isInStock ? "hover:bg-gray-800 cursor-pointer" : "opacity-50 cursor-not-allowed"}` }>
      {isInStock
        ? children
        : "Out of Stock"}
    </div>
  );
};

export default Button;
