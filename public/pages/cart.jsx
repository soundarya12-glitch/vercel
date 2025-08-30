// src/pages/SignIn.jsx
// src/pages/SignIn.jsx
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
export default function Cart() {
    const navigate = useNavigate(); // ✅ initialize
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-200">
        <div className="relative bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        {/* X Close Button */}
        <button
          onClick={() => navigate(-1)} // Go back
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
      Add to cart
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="No of books"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            placeholder="Book name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Add to cart
          </button>
        </form>
     
      </div>
      </div>
    </div>
  );
}
