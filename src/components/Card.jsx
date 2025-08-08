import React from "react";
import controller from "../assets/gamecontroller.webp";
import Button from "./Button";

const Card = () => {
  return (
    <div className="w-[400px] h-auto mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <img className="w-full object-cover" src={controller} alt="Product" />
      <div className="p-4">
        <h2 className="text-2xl text-[#000] font-semibold mb-2">
          PC Game Controller
        </h2>
        <p className="text-gray-700 mb-4 text-lg">$24.99</p>
        <label htmlFor="colour-options" className="text-[#000]">
          Select a colour:
        </label>
        <select
          name="colour-options"
          id="colour-options"
          className="w-full p-2 mb-4 border border-gray-300 rounded text-[#000] bg-white"
        >
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default Card;
