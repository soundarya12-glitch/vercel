import { useState, useRef, useEffect } from 'react';
import { Link,NavLink } from 'react-router-dom';
import {
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,

} from '@heroicons/react/24/outline';
import React from 'react'

export default function TopNavbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const letters = ['T','H','E', 'B','O','O','K','S',];


  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="text-black border-b py-4 px-4 flex flex-wrap items-center justify-between gap-y-4 relative">

      {/* Logo */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start">
   <div className="flex flex-wrap justify-center gap-1 p-1">
      {letters.map((letter, index) => (
        <div
          key={index}
          className="relative w-10 h-10  flex items-center justify-center bg-purple-100 text-xl text-purple-800"
        >
          {letter}
      
        </div>
      ))}
    </div>
     </div>

      {/* Search & Category */}
      <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto relative" ref={dropdownRef}>
        <input
          type="text"
          placeholder="Search Product"
          className="px-4 py-2 border rounded-md w-full sm:w-56"
        />

        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center px-4 py-2 border rounded-md w-full sm:w-56 bg-white"
        >
          Select Category
          <svg
            className="ml-2 h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.5 7l4.5 4.5L14.5 7z" />
          </svg>
        </button>
 <NavLink
        to="/Quiz"
        className={({ isActive }) =>
          `px-7 py-2 text-2xl rounded whitespace-nowrap ${
            isActive ? "bg-blue-200 text-blue-800 font-semibold" : "hover:bg-blue-100"
          }`
        }
      >
        Take a quiz
      </NavLink>
        {open && (
          <div className="absolute top-full mt-2 w-full sm:w-56 bg-white border border-gray-200 rounded shadow-lg z-20">
            <ul className="py-1 text-sm text-gray-700">
              <li><Link to="Friction" className="block px-4 py-2 hover:bg-gray-100">Fiction</Link></li>
              <li><Link to="/nonfriction" className="block px-4 py-2 hover:bg-gray-100">Non-Fiction</Link></li>
              <li><Link to="/Combo" className="block px-4 py-2 hover:bg-gray-100">Combos & Box Sets</Link></li>
              <li><Link to="/category/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link></li>
            </ul>
          </div>
        )}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
        <Link to="/"><MagnifyingGlassIcon className="h-5 w-5 text-black" /></Link>
        <Link to="/signin"><ArrowRightOnRectangleIcon className="h-6 w-6" /></Link>
        <Link to="/Reg"><UserPlusIcon className="h-6 w-6" /></Link>
        <Link to="/cart"><ShoppingCartIcon className="h-6 w-6 text-gray-800" /></Link>
      </div>
    </nav>
  );
}
