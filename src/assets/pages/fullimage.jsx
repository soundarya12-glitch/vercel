import { Link } from "react-router-dom";
import React from 'react'

export default function Full() {
  return (
            <div className="pointer-events-auto cursor-pointer">
          <Link to="/cathree" className="block">
            <img
              src="cart.jpg"
              alt="Slide 1"
              className="w-full object-cover max-h-[500px] sm:max-h-[400px] md:max-h-[500px]"
            />
          </Link>
        </div>
  );
}
