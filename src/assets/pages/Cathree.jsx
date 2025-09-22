import { Link } from "react-router-dom";
import { useState } from "react";
import React from 'react';
export default function Cathree() {
  const [count, setCount] = useState(1);

  return (
    <div className="relative w-full p-4 md:p-6 rounded-lg min-h-[150px] flex flex-col md:flex-row items-center justify-between gap-6 bg-white shadow-md">

      {/* Left: Image */}
      <div className="relative flex-shrink-0">
        <img
          src="bus.jpg"
          alt="Corner"
          className="w-60 h-60 md:w-[500px] md:h-[500px] object-cover rounded shadow"
        />
      </div>

      {/* Center: Text */}
      <div className="flex-1 text-center md:text-left top-0">
        <h2 className="text-2xl font-semibold mb-2">Sannyas in the city</h2>
        

        <p className="text-lg text-gray-600">The Urban Dweller’s Guide to Inner Freedom</p>
        <p className="text-lg text-gray-600">By: Adarsh Gupta, Neha Sareen, Shikha Mehra & Dr Mickey Mehta</p>
        <p className="text-lg text-gray-600">Sanyaas in the City</p>
        <div className="flex justify-left mt-7 gap-7 flex-wrap w-[500px] md:h-[50px] ">
          
  <h2 className="text-xl font-semibold px-3 gap-6">Format</h2>

  <h2 className="text-xl font-semibold px-3">Pages</h2>
  <h2 className="text-xl font-semibold px-3">Weight</h2>
    <h2 className="text-xl font-semibold px-3">Language</h2>
    
</div>
<div className="flex justify-left mt- gap-7 flex-wrap ">
          
  <p className="text-sm font-semibold text-gray-600 px-3">PaperBack</p>

  <p className="text-sm text-gray-600 font-semibold px-3">264</p>
  <h2 className="text-sm text-gray-600 font-semibold px-9">0.62 grams</h2>
    <h2 className="text-sm text-gray-600 font-semibold px-3">English</h2>
</div>

        <div className="flex justify-left mt-7 gap-7 flex-wrap w-[500px] md:h-[50px] ">
          
  <h2 className="text-xl font-semibold px-3 gap-6">Public</h2>

  <h2 className="text-xl font-semibold px-3"> Year</h2>
  <h2 className="text-xl font-semibold px-3">Country</h2>
    <h2 className="text-xl font-semibold px-3">Language</h2>
    
</div>
<div className="flex justify-left mt- gap-7 flex-wrap ">
          
  <p className="text-sm font-semibold text-gray-600 px-3">PaperBack</p>

  <p className="text-sm text-gray-600 font-semibold px-3">264</p>
  <h2 className="text-sm text-gray-600 font-semibold px-9">0.62 grams</h2>
    <h2 className="text-sm text-gray-600 font-semibold px-3">English</h2>
</div>
<div className="flex justify-left mt-7 gap-7 flex-wrap w-[500px] md:h-[50px] ">
          
  <h2 className="text-xl font-semibold px-3 gap-6">Public</h2>

  <h2 className="text-xl font-semibold px-3"> Year</h2>
  <h2 className="text-xl font-semibold px-3">Country</h2>
    <h2 className="text-xl font-semibold px-3">Language</h2>
    
</div>
<div className="flex justify-left mt- gap-7 flex-wrap ">
          
  <p className="text-sm font-semibold text-gray-600 px-3">PaperBack</p>

  <p className="text-sm text-gray-600 font-semibold px-3">264</p>
  <h2 className="text-sm text-gray-600 font-semibold px-9">0.62 grams</h2>
    <h2 className="text-sm text-gray-600 font-semibold px-3">English</h2>
</div>
      </div>

      {/* Right: Price, Quantity & Buttons */}
      <div className="flex flex-col items-center md:items-end gap-3 p-4 border rounded-lg shadow-lg shadow-pink-500/40">
        {/* Price Section */}
        <div className="text-center md:text-right">
          <h1 className="text-xl text-gray-500 line-through">$399</h1>
          <h1 className="text-xl text-orange-600 font-bold">$299</h1>
          <p className="text-gray-700">In Stock</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white text-xl w-10 h-10 rounded hover:bg-green-600"
          >
            +
          </button>
          <span className="text-2xl font-bold text-gray-800 w-10 text-center">
            {count}
          </span>
          <button
            onClick={() => setCount(count > 1 ? count - 1 : 1)}
            className="bg-red-500 text-white text-xl w-10 h-10 rounded hover:bg-red-600"
          >
            –
          </button>
        </div>

        {/* Action Buttons */}
        <Link to="/cart" className="w-full">
          <button className="w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
            Add to Cart
          </button>
        </Link>
        <Link to="/login" className="w-full">
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Add to Wishlist
          </button>
        </Link>
      </div>
    </div>
  );
}
