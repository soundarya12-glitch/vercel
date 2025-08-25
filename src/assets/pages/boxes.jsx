import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import React from 'react'
export default function FourBoxes() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {/* Box 1 */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-md text-left">
        
        <h2 className="text-2xl font-bold mb-3">Non-Friction</h2>
        <p className="text-gray-600  mb-2">Poerty.</p>
         <p className="text-gray-600  mb-2">Biographies & Memories.</p>
          <p className="text-gray-600  mb-2">Business and investments.</p>
           <p className="text-gray-600 mb-2">Philosphy and spirtual.</p>
            <Link to="/page1" className="text-red-600 hover:underline font-medium">View More</Link>
      </div>

      {/* Box 2 */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-md text-left">
        <h2 className="text-2xl font-bold mb-3">Friction</h2>
             <ChevronRight className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
         <p className="text-gray-600 mb-2">Crime and Thillers.</p>
              <ChevronRight className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
          <p className="text-gray-600 mb-2">Myth Legens and sagas.</p>
           <p className="text-gray-600 mb-2">Constemution Friction.</p>
            <p className="text-gray-600 mb-2">Manga and Graphic novels.</p>
             <Link to="/page1" className="text-red-600 hover:underline font-medium">View More</Link>
      </div>

      {/* Box 3 */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-md text-left">
        <h2 className="text-2 xl font-bold mb-2">Self help</h2>
    <p className="text-gray-600">Poerty.</p>
     <p className="text-gray-600">Poerty.</p>
      <p className="text-gray-600">Poerty.</p>
       <p className="text-gray-600">Poerty.</p>
        <Link to="/page1" className="text-blue-600 hover:underline font-medium">View More</Link>
      </div>

      {/* Box 4 */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-md text-left">
        <h2 className="text-xl font-bold mb-2">Heading 4</h2>
  <p className="text-gray-600">Poerty.</p>
   <p className="text-gray-600">Poerty.</p>
    <p className="text-gray-600">Poerty.</p>
     <p className="text-gray-600">Poerty.</p>
      <Link to="/page1" className="text-blue-600 hover:underline font-medium">View More</Link>
      </div>
    </div>
    
  );
}
