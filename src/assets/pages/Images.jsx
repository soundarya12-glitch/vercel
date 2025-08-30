import React from "react";
import { Link } from "react-router-dom";
function TwoImagesSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
      {/* Image 1 */}
      <div className="relative">
           <Link to="/cart.jsx">
        <img
          src="/aboutus.jpg"   // 👈 Put first.jpg in public folder
          alt="First"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
        </Link>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
          
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative">
           <Link to="/cart.jsx">
        <img
          src="/books.jpg"   // 👈 Put second.jpg in public folder
          alt="Second"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
        </Link>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
          
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <TwoImagesSection />
    </>
  );
}
