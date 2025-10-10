import React, { useEffect, useState } from 'react';

const images = [
  
  { src: '/romance.jpg', title: 'Romance', link: '/books/romance', link: '/Reg ',button:'BUY NOW',rating:5 },
  { src: '/mystery.jpg', title: 'Mystery', link: '/books/mystery',button:'BUY NOW' },
  { src:  '/scfi.jpg', title: 'Sci-Fi', link: '/books/scifi',button:'BUY NOW' },

  { src: '/history.jpg', title: 'History', link: '/books/history',button:'BUY NOW' },
  { src: '/fantasy.jpg', title: 'Fantasy', link: '/books/fantasy',button:'BUY NOW' },
  
  { src: '/travel.jpg', title: 'Romance', link: '/books/romance', link: '/Reg ',button:'BUY NOW' },
  { src: '/mystery.jpg', title: 'Mystery', link: '/books/mystery',button:'BUY NOW' },
  { src:  '/scfi.jpg', title: 'Sci-Fi', link: '/books/scifi',button:'BUY NOW' },

  { src: '/history.jpg', title: 'History', link: '/books/history',button:'BUY NOW' },
  { src: '/fantasy.jpg', title: 'Fantasy', link: '/books/fantasy',button:'BUY NOW' },
    { src: '/history.jpg', title: 'History', link: '/books/history',button:'BUY NOW' },
  { src: '/mystery.jpg', title: 'Mystery', link: '/books/mystery',button:'BUY NOW' },
  
];

const chunkSize = 6;

export default function PagedImageCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + chunkSize) % images.length);
    }, 4800);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = images.slice(startIndex, startIndex + chunkSize);
const buttonStyle ="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded mt-2";
  return (
    <div className="w-full px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">
         New Release
      </h2>
      <div className="grid grid-cols- sm:grid-cols-3 md:grid-cols-6 gap-4 transition-all duration-700 ease-in-out">
        {visibleImages.map((img, idx) => (
          <div key={idx} className="text-left">
            <a href={img.link}>
              <div className="w-full h-25 md:h-22 rounded overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-200 h-full object-cover"
                />
              </div>
              
          
               <h6 className="text-sm text-purple-700 font-semibold mb-1">{img.Author}</h6>
              <p className="mt-2 text-sm font-semibold text-gray-700">{img.title}</p>
            </a>
              
              </div>
              
          
        
        ))}
      </div>
    </div>
  );
}
