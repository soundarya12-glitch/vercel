import React from "react";
import { Link } from "react-router-dom";
function Imagesection() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
      {/* Image 1 */}
      <div className="relative">
            <Link to="/Blog">
        <img
          src="/blog.jpg"   // 👈 Place this in public/
          alt="First"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
        </Link>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
      
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative">
           <Link to="/Testimonal">
        <img
          src="/test.jpg"   // 👈 Place this in public/
          alt="Second"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
        </Link>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
        
        </div>
      </div>

      {/* Image 3 */}
      <div className="relative">
                  <Link to="/Aboutus">
        <img
          src="/about.jpg"   // 👈 Place this in public/
          alt="Third"
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
      <Imagesection/>
    </>
  );
}
