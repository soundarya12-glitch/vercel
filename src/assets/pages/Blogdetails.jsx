// src/pages/BlogDetail.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function BlogDetail() {
  const { state } = useLocation();
  

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>No blog post found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6">
        <h1 className="text-2xl font-bold text-purple-700 mb-2">
          {state.title}
        </h1>
        <p className="text-sm text-gray-500 mb-4">{state.date}</p>
        <p className="text-gray-700 leading-relaxed mb-6">{state.content}</p>
        <Link
          to="/blog"
          className="text-purple-600 font-medium hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
