import React from "react";
import { Link } from "react-router-dom";
function Imagesections() {
  return (
    
   <div className="relative">
               <Link to="/Aboutus">
           <img
             src="/aboutt.jpg"   // 👈 Place this in public/
             alt="First"
             className="w-full h-auto rounded-2xl shadow-lg"
           />
           </Link>
           <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
         
           </div>
         </div>
  );
}
export default function App() {
  return (
    <>
      <Imagesections/>
    </>
  );
}
