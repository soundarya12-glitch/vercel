// src/pages/Settings.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; // make sure auth is imported
import { auth } from "../../firebase";// adjust path if needed

export default function Settings() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 text-white flex flex-col">
        <div className="text-2xl font-bold p-6 text-center">📚 BookStore</div>
        <nav className="flex flex-col gap-4 p-4 text-center">
          <Link to="/Dashboard" className="hover:bg-white/20 text-lg p-3 rounded-md">
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
            className="bg-red-600 hover:bg-red-700 px-4 py-2 mt-6 rounded-lg text-white"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 py-10 px-6">
        <h1 className="text-2xl font-bold text-black-700 mb-6 text-center">Settings</h1>

        <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-6 space-y-8">
          {/* Profile Settings */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Username
                </label>
                <input
                  type="text"
               
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
             
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>
          </section>

          {/* Preferences */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Preferences
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                <label className="text-gray-700">Enable Dark Mode</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label className="text-gray-700">Email Notifications</label>
              </div>
            </div>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Security</h2>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Change Password
              </label>
              <input
                type="password"
                placeholder="New password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
          </section>

          {/* Save Button */}
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}
