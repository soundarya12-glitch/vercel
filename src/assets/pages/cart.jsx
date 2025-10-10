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
const handleCheckout = (book) => {
    // Navigate to different checkout pages based on book id or title
    if (book.id === 1) navigate("/checkout", { state: { book } });
    else if (book.id === 2) navigate("/checkouttwo", { state: { book } });
    else navigate("/checkoutthree", { state: { book } }); // default
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
            to="/Orders"
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
                  className=" hover:bg-red-700 p-3 rounded-lg text-white"
                >
                  Logout
                </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="p-6 flex-1">
        <h1 className="text-3xl font-bold mb-6 text-center">My Cart</h1>

        {/* Wishlist Section */}

        {/* Cart Section */}
        <section>
         
          {cart.length === 0 ? (
            <p>No books in cart yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded shadow flex flex-col items-center"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover mb-2"
                  />
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="text-green-600 font-semibold mb-2">
                    ₹{item.price} x {item.quantity}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleCheckout(item)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Checkout
                    </button>
                    <button
                      onClick={() => handleRemoveCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
