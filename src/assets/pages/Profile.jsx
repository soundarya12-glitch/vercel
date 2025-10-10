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
           <Link
                                      to="/Cart"
                                      className="hover:bg-white/20 text-lg p-3 rounded-md"
                                    >
                                      My Cart
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
        <h2 className="text-3xl font-bold text-center mb-8">👤 My Profile</h2>

        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
          <p className="mb-4">
            <strong>Email:</strong> {auth.currentUser?.email}
          </p>
          <p className="mb-4">
            <strong>Display Name:</strong> {auth.currentUser?.displayName || "soundarya mai"}
          </p>
        </div>
      </main>
      </div>
  );
}
