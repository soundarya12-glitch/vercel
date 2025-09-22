import { useState } from 'react';
import { Link ,NavLink} from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react'
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md text-black px-4 py-2">
      {/* Top-left hamburger (visible only on small screens) */}
  <div className="absolute top-2 left-2 xl:hidden z-30">
  <button
    onClick={() => setOpen(!open)}
    className="flex flex-col items-center justify-center w-8 h-8 space-y-1"
  >
    <span className="block w-6 h-0.5 bg-black"></span>
    <span className="block w-6 h-0.5 bg-black"></span>
    <span className="block w-6 h-0.5 bg-black"></span>
  </button>
</div>

      {/* Center content for xl and up */}
             <div className="mx-auto text-center hidden md:flex space-x-4 text-sm font-medium">
        {/* Navigation Links (centered on large screens) */}
        <div className="hidden xl:flex space-x-4 text-xl font-medium">
          <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 rounded whitespace-nowrap ${
            isActive ? "bg-blue-200 text-blue-800 font-semibold" : "hover:bg-blue-100"
          }`
        }
      >
        All Books
      </NavLink>

      <NavLink
        to="/Friction"
        className={({ isActive }) =>
          `px-3 py-2 rounded ${
            isActive ? "bg-blue-200 text-blue-800 font-semibold" : "hover:bg-blue-100"
          }`
        }
      >
        Friction
      </NavLink>

      <NavLink
        to="/Combo"
        className={({ isActive }) =>
          `px-3 py-2 rounded whitespace-nowrap ${
            isActive ? "bg-blue-200 text-blue-800 font-semibold" : "hover:bg-blue-100"
          }`
        }
      >
        Combos & Box Sets
      </NavLink>

      <NavLink
        to="/Nonfriction"
        className={({ isActive }) =>
          `px-3 py-2 rounded whitespace-nowrap ${
            isActive ? "bg-blue-200 text-blue-800 font-semibold" : "hover:bg-blue-100"
          }`
        }
      >
        Non-Friction
      </NavLink>

      <NavLink
        to="/Blog"
        className={({ isActive }) =>
          `px-3 py-2 rounded ${
            isActive ? "bg-blue-200 text-blue-800 font-semibold" : "hover:bg-blue-100"
          }`
        }
      >
        Blog
      </NavLink>

      <NavLink
        to="/Bookmarks"
        className={({ isActive }) =>
          `px-3 py-2 rounded ${
            isActive ? "bg-blue-200 text-blue-800 font-semibold" : "hover:bg-blue-100"
          }`
        }
      >
        Bookmarks
      </NavLink>

      <NavLink
        to="/Academic"
        className={({ isActive }) =>
          `px-3 py-2 rounded whitespace-nowrap ${
            isActive ? "bg-blue-200 text-blue-800 font-semibold" : "hover:bg-blue-100"
          }`
        }
      >
        Academic Books
      </NavLink>

      <NavLink
        to="/Spiritual"
        className={({ isActive }) =>
          `px-3 py-2 rounded whitespace-nowrap ${
            isActive ? "bg-blue-200 text-blue-800 font-semibold" : "hover:bg-blue-100"
          }`
        }
      >
        Spiritual Books
      </NavLink>
        </div>

        {/* WhatsApp contact */}
        <div className="flex items-center space-x-2 text-xl ml-auto">
          <FaWhatsapp className="text-green-700 text-xl" />
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline whitespace-nowrap"
          >
            98765 43210
          </a>
        </div>
      </div>

      {/* Dropdown below the navbar (mobile only) */}
      {open && (
        <div className="xl:hidden mt-14 bg-white border border-gray-200 rounded shadow-md p-4 space-y-2 absolute left-2 w-60 z-40">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:bg-gray-100 px-2 py-1 rounded">All Books</Link>
          <Link to="/Friction" onClick={() => setOpen(false)} className="block hover:bg-gray-100 px-2 py-1 rounded">Friction</Link>
          <Link to="/Combo" onClick={() => setOpen(false)} className="block hover:bg-gray-100 px-2 py-1 rounded">Combos & Box Sets</Link>
          <Link to="/nonfriction" onClick={() => setOpen(false)} className="block hover:bg-gray-100 px-2 py-1 rounded">Non-Friction</Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="block hover:bg-gray-100 px-2 py-1 rounded">Blog</Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="block hover:bg-gray-100 px-2 py-1 rounded">Bookmarks</Link>
        </div>
      )}
    </nav>
  );
}
