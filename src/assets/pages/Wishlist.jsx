// src/pages/Wishlist.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Wishlist() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const wishlist = [
    { id: 1, title: "Think Like a Monk", author: "Jay Shetty", price: "$15" },
    { id: 2, title: "The Psychology of Money", author: "Morgan Housel", price: "$12" },
    { id: 3, title: "Ikigai", author: "Héctor García", price: "$10" },
        { id: 1, title: "Think Like a Monk", author: "Jay Shetty", price: "$15" },
    { id: 2, title: "The Psychology of Money", author: "Morgan Housel", price: "$12" },
    { id: 3, title: "Ikigai", author: "Héctor García", price: "$10" },
  ];


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 text-white flex flex-col">
        <div className="text-2xl font-bold p-6 text-center">📚 BookStore</div>
        <nav className="flex flex-col gap-4 p-4 text-center">
          <Link to="/Dashboard" className="hover:bg-white/20 text-lg p-3 rounded-md">
            Home
          </Link>
          <Link to="/Orders" className="hover:bg-white/20 text-lg p-3 rounded-md">
            My Orders
          </Link>
          <Link to="/Wishlist" className="hover:bg-white/20 text-lg p-3 rounded-md">
            Wishlist
          </Link>
          <Link to="/Profile" className="hover:bg-white/20 text-lg p-3 rounded-md">
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className=" hover:bg-red-700 p-3 rounded-lg text-white"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-center mb-8">❤️ My Wishlist</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
              <p className="text-gray-800 font-bold mt-2">{book.price}</p>

              <div className="mt-4 flex gap-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                  Add to Cart
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
