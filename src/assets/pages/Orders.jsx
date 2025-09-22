// src/pages/Orders.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Orders() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const orders = [
    { id: 1, title: "The Great Gatsby", status: "Delivered", date: "2025-09-01" },
    { id: 2, title: "Atomic Habits", status: "Pending", date: "2025-09-10" },
    { id: 3, title: "Rich Dad Poor Dad", status: "Shipped", date: "2025-09-15" },
    { id: 4, title: "The Alchemist", status: "Delivered", date: "2025-09-05" },
    { id: 5, title: "The Psychology of Money", status: "Pending", date: "2025-09-12" },
    { id: 6, title: "Ikigai", status: "Shipped", date: "2025-09-16" },
    { id: 7, title: "Think Like a Monk", status: "Delivered", date: "2025-09-18" },
    { id: 8, title: "Sapiens", status: "Pending", date: "2025-09-19" },
        { id: 9, title: "Think Like a Monk", status: "Delivered", date: "2025-09-18" },
    { id: 10, title: "Sapiens", status: "Pending", date: "2025-09-19" },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  return (
    
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 text-white flex flex-col">
        <div className="text-2xl font-bold p-6 text-center">📚 BookStore</div>
        <nav className="flex flex-col gap-4 p-4 text-center">
          <Link to="/dashboard" className="hover:bg-white/20 text-lg p-3 rounded-md">
            Home
          </Link>
          <Link to="/orders" className="hover:bg-white/20 text-lg p-3 rounded-md">
            My Orders
          </Link>
          <Link to="/wishlist" className="hover:bg-white/20 text-lg p-3 rounded-md">
            Wishlist
          </Link>
          <Link to="/dashboard/profile" className="hover:bg-white/20 text-lg p-3 rounded-md">
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className=" hover:bg-red-700 px-4 py-2 mt-4 rounded-lg text-white"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-center mb-6">📦 My Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
              <tr>
                <th className="py-3 px-4 text-center">Order ID</th>
                <th className="py-3 px-4 text-left">Book Title</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100 transition">
                  <td className="py-3 px-4 text-center font-mono text-gray-700">
                    #{order.id.toString().padStart(3, "0")}
                  </td>
                  <td className="py-3 px-4 text-left font-medium">{order.title}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1 ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
