import React, { useEffect, useState } from 'react';

const images = [
  { src: '/fiction.jpg', title: 'Fiction',link:'/Friction' },
  { src: '/romance.jpg', title: 'Romance', link: '/faq' },
  { src: '/mystery.jpg', title: 'Mystery', link: '/books/mystery' },
  { src:  '/scfi.jpg', title: 'Sci-Fi', link: '/books/scifi' },
  { src: '/selfhelp.jpg', title: 'Self Help', link: '/books/selfhelp' },
  { src: '/history.jpg', title: 'History', link: '/books/history' },
  { src: '/fantasy.jpg', title: 'Fantasy', link: '/books/fantasy' },
  { src: '/biographic.jpg', title: 'Biography', link: '/books/biography' },
  { src: '/travel.jpg', title: 'Travel', link: '/books/travel' },
  { src: '/health.jpg', title: 'Health', link: '/books/health' },
  { src: '/poetry.jpg', title: 'Poetry', link: '/books/poetry' },
  { src: '/business.jpg', title: 'Business', link: '/books/business' },
];

const chunkSize = 6;

export default function PagedImageCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + chunkSize) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = images.slice(startIndex, startIndex + chunkSize);

  return (
    <div className="w-full px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">
        Popular Categories in Books
      </h2>
      <div className="grid grid-cols- sm:grid-cols-3 md:grid-cols-6 gap-4 transition-all duration-700 ease-in-out">
        {visibleImages.map((img, idx) => (
          <div key={idx} className="text-center">
            <a href={img.link}>
              <div className="w-full h-60 md:h-30 rounded overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-1 hover:scale-105">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-700">{img.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
