// src/components/ImageCarousel.jsx
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import React from 'react'
export default function Second() {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        emulateTouch
        transitionTime={1000}
        swipeable
        dynamicHeight={false}
      >
        {/* Slide 1 */}
          <div className="pointer-events-auto cursor-pointer">
          <Link to="/caone" className="block">
            <img
              src="c1.jpg"
              alt="Slide 1"
              className="w-full object-cover max-h-[500px] sm:max-h-[400px] md:max-h-[500px]"
            />
          </Link>
        </div>

        {/* Slide 2 */}
        <div className="pointer-events-auto cursor-pointer">
          <Link to="/catwo" className="block">
            <img
              src="c2.jpg"
              alt="Slide 1"
              className="w-full object-cover max-h-[500px] sm:max-h-[400px] md:max-h-[500px]"
            />
          </Link>
        </div>

    
      
      </Carousel>
    </div>
  );
}
