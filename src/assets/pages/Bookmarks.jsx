// src/pages/Bookmarks.jsx
import React from "react";

export default function Bookmarks() {
  const bookmarks = [
    {
      id: 1,
      title: "Think Like a Monk",
      author: "Jay Shetty",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-2xl font-bold text-center text-purple-700 mb-8">
        Bookmarks
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {bookmarks.length > 0 ? (
          bookmarks.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow rounded-xl p-5 hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {book.title}
              </h2>
              <p className="text-sm text-gray-500">by {book.author}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No bookmarks yet.</p>
        )}
      </div>
    </div>
  );
}
