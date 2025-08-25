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
               <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill={i < 5 ? "#facc15" : "#d1d5db"} // yellow-400 and gray-300
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.214 3.726a1 1 0 00.95.69h3.916c.969 0 1.371 1.24.588 1.81l-3.17 2.302a1 1 0 00-.364 1.118l1.214 3.726c.3.921-.755 1.688-1.54 1.118l-3.17-2.302a1 1 0 00-1.176 0l-3.17 2.302c-.784.57-1.838-.197-1.54-1.118l1.213-3.726a1 1 0 00-.364-1.118L2.38 9.153c-.783-.57-.38-1.81.588-1.81h3.916a1 1 0 00.95-.69l1.214-3.726z" />
                  </svg>
                ))}
               
              </div>
              <button
              className={buttonStyle}
              onClick={() =>navigate(images.link)}
            >
              {img.button}
            </button>
          
            </div>
        
        ))}
      </div>
    </div>
  );
}
