import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";
export default function DashboardHome() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold text-gray-800">
          Welcome, {auth.currentUser?.email}
        </h1>

        <div className="flex items-center gap-4">
     <Link
        to="/settings"
        className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition inline-flex"
      >
        <Settings className="w-6 h-6" />
      </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Dashboard Content Area */}
      <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64  h-50 bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 text-white flex flex-col">
              <div className="text-2xl font-bold p-6 text-center">📚 BookStore</div>
              <nav className="flex flex-col gap-4 p-4 text-center">
                <Link to="/dashboard" className="hover:bg-white/20 text-lg p-3 rounded-md">
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
        {/* Main Content (Home Page inside dashboard) */}
        <main className="flex-1 p-8 overflow-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-purple-200 via-pink-100 to-red-200 rounded-xl p-12 text-center mb-10 shadow">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Discover Your Next Favorite Book
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Explore thousands of titles across genres, handpicked just for you.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg">
              Browse Collection
            </button>
          </div>

          {/* Featured Books */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "The Great Gatsby", price: "$12.99", img: "https://picsum.photos/200/300?1" },
              { title: "To Kill a Mockingbird", price: "$9.99", img: "https://picsum.photos/200/300?2" },
              { title: "1984", price: "$14.99", img: "https://picsum.photos/200/300?3" },
            ].map((book, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition"
              >
                <img src={book.img} alt={book.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{book.title}</h4>
                  <p className="text-purple-600 font-bold mt-2">{book.price}</p>
                  <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-xl p-10 text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h3>
            <p className="mb-6">Get the latest updates and book recommendations.</p>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg w-64 text-black"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
    
    </div>
  );
}
