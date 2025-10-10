import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Adarsh Gupta",
    role: "Author",
    message: "This book completely changed my perspective on life. Highly recommended!",
    img: "ad.jpg",
  },
  {
    id: 2,
    name: "Neha Sareen",
    role: "Reader",
    message: "Amazing insights and practical tips. Loved every chapter.",
    img: "neha.jpg",
  },
  {
    id: 3,
    name: "Shikha Mehra",
    role: "Blogger",
    message: "A must-read for anyone looking for personal growth.",
    img: "shi.jpg",
  },
  {
    id: 4,
    name: "Dr Mickey Mehta",
    role: "Motivator",
    message: "Excellent book! It gives you clarity and purpose in life.",
    img: "mi.jpg",
  },
];

export default function TestimonialsScroll() {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Readers Say</h2>

      <div className="overflow-hidden relative">
        <div className="flex gap-6 animate-marquee">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-none w-80 bg-white p-6 rounded-lg shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{t.message}</p>
            </div>
          ))}
          {/* Repeat for continuous loop */}
          {testimonials.map((t) => (
            <div
              key={t.id + "_repeat"}
              className="flex-none w-80 bg-white p-6 rounded-lg shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{t.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TailwindCSS animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
