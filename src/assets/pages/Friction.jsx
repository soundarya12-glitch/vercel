import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate,NavLink } from 'react-router-dom';
import {
  FaStar, FaStarHalfAlt, FaRegStar, FaThumbsUp,
  FaThumbsDown, FaCommentAlt, FaQuoteRight, FaPen, FaUserCircle
} from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';

export default function Friction() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const books = [
    { title: 'The Midnight Library', image: '/midnight.jpg', link: '/caone', rating: 4, Author: "Author-name kilopara", button: 'BUY NOW' },
    { title: 'Where the Crawdads Sing', image: '/sing.jpg', link: '/cart', Author: "Author-name kilopara", rating: 5, button: 'BUY NOW' },
    { title: 'It Ends With Us', image: '/end.jpg', link: '/cart', Author: "Author-name kilopara", button: 'BUY NOW', rating: 4 },
    { title: 'The Book Thief', image: '/thief.jpg', link: '/cart', Author: "Author-name kilopara", button: 'BUY NOW', rating: 5 },
    { title: 'The Alchemist', image: '/al.jpg', link: '/cart', Author: "Author-name kilopara", button: 'BUY NOW', rating: 4 },
    { title: 'The sanda brown', image: '/sanda.jpg', link: '/cart', Author: "Author-name kilopara", button: 'BUY NOW', rating: 5 },
    { title: 'The Christmas and carol', image: '/angles.jpg', link: '/cart', Author: "Author-name kilopara", button: 'BUY NOW', rating: 3 },
    { title: 'The Old Man and the Sea', image: '/old.jpg', link: '/cart', Author: "Author-name kilopara", button: 'BUY NOW', rating: 4 },
   
  ];

  const buttonStyle = "bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded mt-2";

  return (
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-200">

    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Fiction</h2>
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
        </div>

        {/* Category Filters */}
        <div className="mb-5">
          <h3 className="font-medium">Category</h3>
          <ul className="space-y-1">
            {["All Books", "Children Books", "Fiction","All Books", "Children Books", "Fiction","All Books", "Children Books", "Fiction"].map((cat, i) => (
              <li key={i}><input type="checkbox" className="mr-2" /> {cat}</li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-5">
          <h3 className="font-medium">Price</h3>
          <input type="range" min="0" max="1000" className="w-full" />
          <button className="w-full mt-2 px-4 py-2 border rounded-sm text-white bg-blue-500">
            Filter
          </button>
        </div>

        {/* Dropdown Menu for Category */}
     
    <div className="mb-7">
          <h3 className="font-medium">Authors</h3>
          <ul className="space-y-1">
            {["All Books", "Children Books", "Fiction","All Books", "Children Books", "Fiction","All Books", "Children Books", "Fiction","All Books", "Children Books", "Fiction"].map((cat, i) => (
              <li key={i}><input type="checkbox" className="mr-2" /> {cat}</li>
            ))}
          </ul>
        </div>
   <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-between items-center px-4 py-2 border rounded-md w-full bg-white"
          >
            Select Category
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.5 7l4.5 4.5L14.5 7z" />
            </svg>
          </button>
          {open && (
            <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded shadow-lg z-50">
              <ul className="py-1 text-sm text-gray-700">
                {[
                  { text: "Fiction", path: '/Friction' },
                  { text: "Non-Fiction", path: '/nonfriction' },
                  { text: "Combos & Box Sets", path: "/combo" },
                  { text: "Blog", path: "/blog" }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="block px-4 py-2 hover:bg-gray-100">{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl text-white  font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 transition-transform transform hover:-translate-y-2">
              <a href={book.link}>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover mb-3 rounded"
                />
                <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
                <h6 className="text-sm text-purple-700 font-semibold mb-2">{book.Author}</h6>

                <div className="p-3 border rounded shadow space-y-2">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
                  </div>
                  <div className="text-gray-700 text-sm">
                    <FaQuoteRight className="inline mr-2 text-gray-400" />
                    Great quality, fast delivery, and amazing customer support.
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1"><FaThumbsUp /> Helpful (12)</span>
                    <span className="flex items-center gap-1"><FaCommentAlt /> 3 Comments</span>
                  </div>
                  <button
                    className={buttonStyle}
                    onClick={(e) => {
                      e.preventDefault(); // prevent <a> redirect
                      navigate(book.link);
                    }}
                  >
                    {book.button}
                  </button>
                  
                </div>
              </a>
            </div>
          ))}
        </div>
           <div className="flex justify-center mt-6 gap-2">
               <NavLink
        to="/friction"
        className={({ isActive }) =>
          `px-3 py-2 bg-blue-500 text-white rounded ${
            isActive ? "bg-indigo-500 text-blue-800 font-semibold" : "hover:bg-indigo-500"
          }`
        }
      >
        1
      </NavLink>
             <NavLink
        to="/fripage2"
        className={({ isActive }) =>
          `px-3 py-2 bg-blue-500 text-white rounded ${
            isActive ? "bg-indigo-500 text-blue-800 font-semibold" : "hover:bg-indigo-500"
          }`
        }
      >
        2
      </NavLink>
      
             <NavLink
        to="/fripage2"
        className={({ isActive }) =>
          `px-3 py-2 bg-blue-500 text-white rounded ${
            isActive ? "bg-indigo-500 text-blue-800 font-semibold" : "hover:bg-indigo-500"
          }`
        }
      >
        3
      </NavLink>
           <NavLink
        to="fripage3"
        className={({ isActive }) =>
          `px-3 py-2 bg-blue-500 text-white rounded ${
            isActive ? "bg-indigo-500 text-blue-800 font-semibold" : "hover:bg-indigo-500"
          }`
        }
      >
        Next
      </NavLink>
      </div>
 
      </main>
    </div>
  
    </div>
  );
}
