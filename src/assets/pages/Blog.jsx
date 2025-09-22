// src/pages/Blog.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Power of Reading Daily",
      author: "Admin",
      date: "Sept 15, 2025",
      excerpt: "Discover how just 20 minutes of daily reading can transform your mind and creativity.",
 image: '/sing.jpg'
    },
    {
      id: 2,
      title: "Top 5 Fiction Books of 2025",
      author: "Soundarya",
      date: "Sept 10, 2025",
      excerpt: "Here’s a list of must-read fiction books this year, handpicked for book lovers.",
    image: '/midnight.jpg',
    },
    {
      id: 3,
      title: "Why Book Clubs Matter",
      author: "Sabitha",
      date: "Sept 1, 2025",
      excerpt: "Book clubs help readers stay consistent and expand their perspectives.",
     image: '/end.jpg'
    },
    {
      id: 4,
      title: "Why Book Clubs Matter",
      author: "Sabitha",
      date: "Sept 1, 2025",
      excerpt: "Book clubs help readers stay consistent and expand their perspectives.",
      image: '/thief.jpg'
    },
  ];

  const [visiblePosts, setVisiblePosts] = useState(2);

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 2);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">
        Our Blog
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.slice(0, visiblePosts).map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                By {post.author} | {post.date}
              </p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to='/Blogdetails'
                className="text-purple-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {visiblePosts < posts.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
