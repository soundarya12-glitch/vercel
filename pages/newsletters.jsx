import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Simulate submission (replace with real API call)
    if (email.includes('@')) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
   <div className="min h-screen flex items-center bg-gradient-to-br from-indigo-600 to-purple-200 py-12 px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-indigo-600" >Subscribe to Our Newsletter</h2>
        <p className="mb-6 text-lg text-indigo-600 ">Get the latest updates, offers, and tips directly to your inbox.</p>

        {submitted ? (
          <p className="text-green-200 font-semibold">Thanks for subscribing!</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
