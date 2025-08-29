import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-200">
      <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-lg text-center">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-3">📩 Join Our Newsletter</h2>
            <p className="text-gray-500 mb-6">
              Get the latest updates, books & offers directly to your inbox.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </>
        ) : (
          <h3 className="text-xl font-semibold text-blue-600">
            ✅ Thank you for subscribing!
          </h3>
        )}
      </div>
    </div>
  );
}
