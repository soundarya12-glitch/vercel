import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };
  // Load wishlist and cart from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Remove from wishlist
  const handleRemoveWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setWishlist(updated);
  };

  // Remove from cart
  const handleRemoveCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  };

  // Checkout function
  const handleCheckout = (item) => {
    navigate("/checkout", { state: { item } });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 text-white flex flex-col">
        <div className="text-2xl font-bold p-6 text-center">📚 BookStore</div>
        <nav className="flex flex-col gap-4 p-4 text-center">
          <Link
            to="/Dashboard"
            className="hover:bg-white/20 text-lg p-3 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/Orders"
            className="hover:bg-white/20 text-lg p-3 rounded-md"
          >
            My Orders
          </Link>
          <Link
            to="/Cart"
            className="hover:bg-white/20 text-lg p-3 rounded-md"
          >
            My Cart
          </Link>
          <Link
            to="/Wishlist"
            className="hover:bg-white/20 text-lg p-3 rounded-md"
          >
            Wishlist
          </Link>
          <Link
            to="/Profile"
            className="hover:bg-white/20 text-lg p-3 rounded-md"
          >
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
      <div className="p-6 flex-1">
        <h1 className="text-3xl font-bold mb-6 text-center">MyWishlist</h1>

        {/* Wishlist Section */}
        <section className="mb-10">
         
          {wishlist.length === 0 ? (
            <p>No books in wishlist yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {wishlist.map((book) => (
                <div
                  key={book.id}
                  className="bg-white p-4 rounded shadow flex flex-col items-center"
                >
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-48 object-cover mb-2"
                  />
                  <h2 className="font-bold">{book.title}</h2>
                  <p className="text-green-600 font-semibold mb-2">
                    ₹{book.price}
                  </p>
                  <button
                    onClick={() => handleRemoveWishlist(book.id)}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Cart Section */}
       
                    
      </div>
    </div>
  );
}
