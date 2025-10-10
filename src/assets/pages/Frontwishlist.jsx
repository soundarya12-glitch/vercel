import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Dummy products for testing
const initialWishlist = [
  { id: 1, name: "Book 1", price: 200, image: "/dis.jpg" },
  { id: 2, name: "Book 2", price: 150 },
  { id: 3, name: "Book 3", price: 300 },
];

export default function WishlistWithAddToCart() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist") || JSON.stringify(initialWishlist));
  });

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  // Persist wishlist and cart
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart and remove from wishlist
  const handleAddToCart = (book) => {
    setCart((prev) => [...prev, book]);
    setWishlist((prev) => prev.filter((item) => item.id !== book.id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="text-center py-4">
          <h1 className="text-gray-500 mb-2 text-lg">Your wishlist is empty</h1>
          <button
            onClick={() => navigate("/Friction")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go to Shop
          </button>
        </div>
      ) : (
        wishlist.map((book) => (
          <div
            key={book.id}
            className="flex justify-between items-center mb-2 border-b pb-2"
          >
            <span>{book.name} - ₹{book.price}</span>
              <span>{book.image} - {book.image}</span>
            <button
              onClick={() => handleAddToCart(book)}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}
